import { NotificationService } from "../services/notification/notificationInterface";
const nodemailer = require('nodemailer');

class EmailService extends NotificationService {
    constructor(emailConfig) {
        super();
        this.transporter = nodemailer.createTransport(emailConfig);
    }

    async sendNotification(to, subject, message) {
        try {
            const info = await this.transporter.sendMail({
                from: emailConfig.auth.user,
                to: to,
                subject: subject,
                text: message
            });

            console.log(`Email sent successfully with Message ID: ${info.messageId}`);
        } catch (error) {
            console.error(`Error sending email: ${error.message}`);
        }
    }
}
export {EmailService};