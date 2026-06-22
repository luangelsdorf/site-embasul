export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  var nodemailer = require("nodemailer");

  const recipients = req.body.recipients || [];
  const hasResume = !!(req.body.resume && req.body.resume.fileContents);
  // Sem o campo "empresa" (ex.: página Trabalhe Conosco) tratamos como candidatura,
  // com ou sem currículo anexado.
  const isApplication = hasResume || !req.body.company;

  let html;
  if (isApplication) {
    html = `
      <div>Você recebeu uma nova candidatura no seu site. Confira as informações abaixo:</div>
      <p><strong>Nome</strong>: ${req.body.name}</p>
      <p><strong>E-mail</strong>: ${req.body.email}</p>
      <p><strong>Telefone</strong>: ${req.body.phone}</p>
      <p><strong>Currículo</strong>: ${hasResume ? '(Ver anexo)' : '(Não anexado)'}</p>
      <p><strong>Mensagem</strong>: ${req.body.message}</p>
    `
  } else {
    html = `
      <div>Você recebeu uma nova mensagem no seu site. Confira as informações abaixo:</div>
      <p><strong>Nome</strong>: ${req.body.name}</p>
      <p><strong>E-mail</strong>: ${req.body.email}</p>
      <p><strong>Telefone</strong>: ${req.body.phone}</p>
      <p><strong>Empresa</strong>: ${req.body.company}</p>
      <p><strong>Mensagem</strong>: ${req.body.message}</p>
    `
  }

  const message = {
    from: `Site Embasul <${process.env.SMTP2GO_SENDER}>`,
    to: recipients,
    subject: isApplication ? `Nova Candidatura | Website Embasul` : `Nova Mensagem | Website Embasul`,
    text: `Mensagem: ${req.body.message} | Enviada de ${req.body.email}`,
    html: html,
    ...(hasResume && {
      attachments: [
        {
          content: req.body.resume.fileContents,
          filename: req.body.resume.filename,
          contentType: req.body.resume.type,
          contentDisposition: 'attachment'
        }
      ]
    })
  }

  var smtpTransport = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525, // 8025, 587 and 25 can also be used.
    auth: {
      user: process.env.SMTP2GO_USER,
      pass: process.env.SMTP2GO_PASSWORD,
    },
  });

  smtpTransport.sendMail(message,
    function (error, response) {
      if (error) {
        console.error('Ocorreu um erro ao enviar o e-mail de contato:');
        console.error(error);
        console.error(error?.response?.body);
        return res.status(500).json({ message: error?.response?.body?.errors?.[0]?.message });
      } else {
        return res.status(200).end();
      }
    }
  );
}
