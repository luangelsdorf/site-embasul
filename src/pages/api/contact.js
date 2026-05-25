export default async function handler(req, res) {
  const recipientsString = req.body.recipients.join(',')
  if (req.method === 'POST') {

    var nodemailer = require("nodemailer");


    let html;
    if (req.body.resume) {
      html = `
        <div>Você recebeu um novo currículo no seu site. Confira as informações abaixo:</div>
        <p><strong>Nome</strong>: ${req.body.name}</p>
        <p><strong>E-mail</strong>: ${req.body.email}</p>
        <p><strong>Telefone</strong>: ${req.body.phone}</p>
        <p><strong>Currículo</strong>: (Ver anexo)</p>
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

    console.log(req.body);
    const message = {
      from: `Site Embasul <${process.env.SMTP2GO_SENDER}>`,
      to: req.body.recipients,
      subject: req.body.resume ? `Novo Currículo | Website Embasul` : `Nova Mensagem | Website Embasul`,
      text: `Mensagem: ${req.body.message} | Enviada de ${req.body.email}`,
      html: html,
      ...(req.body.resume && {
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

  else {
    return res.status(405).end();
  }
}