/*import mailchimp from '@mailchimp/mailchimp_marketing'


mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

async function callPing() {
  const response = await mailchimp.ping.get()
  console.log(response, 'Conectou ao MailChimp!')
}
  
callPing()

export default async (req, res) => {
  console.log('Valores que chegaram no servidor', req.body)
  const { email, name, phone } = req.body;

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      merge_fields: {
        NAME: name,
        PHONE: phone,
      },
      status: 'subscribed',
    });

    return res.status(201).json({ succes: 'Inscrição realizada com sucesso!' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};*/