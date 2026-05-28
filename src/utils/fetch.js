const DEFAULT_LOCALE = 'pt-BR';

async function rawFetch(endpoint, parameters) {
  const cleanParams = Object.fromEntries(
    Object.entries(parameters).filter(([, v]) => v !== undefined && v !== null)
  );

  let [url, endpointParams] = `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`.split('?');
  let params = new URLSearchParams(cleanParams);
  let endpointUSP = new URLSearchParams(endpointParams);
  let resource = decodeURIComponent(`${url}?${endpointUSP.toString() ? (endpointUSP + '&') : ''}${params}`);

  const response = await fetch(`${resource}`);
  return response.json();
}

function isEmpty(result) {
  if (result == null) return true;
  if (result.data == null) return true;
  if (Array.isArray(result.data) && result.data.length === 0) return true;
  return false;
}

export default async function fetchAPI(endpoint = '', parameters = {}, dataOnly = true) {
  const hasPopulate = Object.keys(parameters).some(k => k === 'populate' || k.startsWith('populate['));
  if (!hasPopulate) {
    parameters = { populate: 'deep', ...parameters };
  }
  if (parameters.populate === false || parameters.populate === null) delete parameters.populate;

  let result = await rawFetch(endpoint, parameters);

  if (isEmpty(result) && parameters.locale && parameters.locale !== DEFAULT_LOCALE) {
    result = await rawFetch(endpoint, { ...parameters, locale: DEFAULT_LOCALE });
  }

  if (dataOnly) {
    if (result?.data == null) return null;
    if (result.data.attributes) {
      const { data: { attributes: data } } = result;
      return data;
    }
    return result.data;
  }

  return result;
}

export async function getLayoutContent(locale) {
  const footer = await fetchAPI('footer', { populate: 'deep', locale });
  const header = await fetchAPI('cabecalho', { populate: 'deep', locale });

  return { footer, header };
}
