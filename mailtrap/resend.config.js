// import { MailtrapClient } from "mailtrap"

// const TOKEN = "a03fed6e5605291333595a002c888bc6";

// export const mailtrapClient = new MailtrapClient({
//   token: TOKEN,
// });




import { Resend } from 'resend';

export const resend = new Resend('re_MfZQpVU3_4j3T1QWWA92JRiNHw2BfQb6T');

export const sender = "onboarding@resend.dev"
  



// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'amranveersingh@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });