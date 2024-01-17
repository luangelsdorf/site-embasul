export default async function fetchAPI(endpoint = '', parameters = { populate: 'deep' }, dataOnly = true) {
  let result;

  if (parameters.populate === false || parameters.populate === null) delete parameters.populate;

  let [url, endpointParams] = `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`.split('?');
  let params = new URLSearchParams(parameters);
  let endpointUSP = new URLSearchParams(endpointParams);
  let resource = decodeURIComponent(`${url}?${endpointUSP.toString() ? (endpointUSP + '&') : ''}${params}`);

  const response = await fetch(`${resource}`);
  result = await response.json();

  if (dataOnly) {
    if (result.data.attributes) {
      let { data: { attributes: data } } = result;
      return data;
    }
    else {
      let { data: data } = result;
      return data;
    }
  }

  else {
    return result;
  }
}

export async function getLayoutContent() {
  const footer = await fetchAPI('footer');
  const info = await fetchAPI('info');

  return { footer, info };
}