export default async function handler(req, res) {

  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

    const message = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      subject: req.body.resume ? `Novo Currículo | Website Embasul` : `Nova Mensagem | Website Embasul`,
      text: `Mensagem: ${req.body.message} | Enviada de ${req.body.email}`,
      html: html,
      ...(req.body.resume && {
        attachments: [
          {
            content: req.body.resume.fileContents,
            filename: req.body.resume.filename,
            type: req.body.resume.type,
            disposition: 'attachment'
          }
        ]
      })
    }

    sgMail
      .send(message)
      .then((response) => {
        if ((response[0].statusCode / 200) >= 1 && (response[0].statusCode / 200) < 1.5) {
          return res.status(200).send('Sent successfully');
        }
      })
      .catch((error) => {
        console.error(error);
        return res.status(error.code).send('Sent successfully');
      });

  } else {
    return res.status(405).send('Method not allowed.');
  }
}