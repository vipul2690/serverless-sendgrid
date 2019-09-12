const sgMail = require('@sendgrid/mail');
const sendgridkey = 'some_random_key';

 class SendGridEmailHelper {

    async sendMail() {
        sgMail.setApiKey(sendgridkey);
        const msg = {
            to: 'abc@example.com',
            from: 'info@abc.co',
            subject: 'Test Mail',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        try {
            let result = await sgMail.send(msg);
        } catch (err) {
            console.log(err);
            throw err;
        }
      
    }
}
const sendGridEmailHelper = new SendGridEmailHelper();
export default sendGridEmailHelper;