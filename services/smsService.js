import { NotificationService } from "../services/notification/notificationInterface";
const twilio = require('twilio');

class SMSService extends NotificationService {

    constructor(accountSid, authToken, twilioPhoneNumber) {
        super();
        this.client = twilio(accountSid, authToken);
        this.twilioPhoneNumber = twilioPhoneNumber;
    }

    async sendNotification(to, message) {
        try {
            const result = await this.client.messages.create({
                body: message,
                from: this.twilioPhoneNumber,
                to: to
            });

            console.log(`SMS sent successfully with SID: ${result.sid}`);
        } catch (error) {
            console.error(`Error sending SMS: ${error.message}`);
        }
    }
}

export {SMSService};