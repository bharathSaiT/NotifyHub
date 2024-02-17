import { NotificationService } from "../services/notification/notificationInterface";
import admin from 'firebase-admin';
import { pushConfig } from "../config/pushNotificationConfig";

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); //service account key file
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${pushConfig.projectId}.firebaseio.com`
});

class PushNotificationService extends NotificationService {
    constructor() {
        super();
        this.messaging = admin.messaging();
    }

    async sendNotification(to, message) {
        const payload = {
            notification: {
                title: 'Your Notification Title',
                body: message
            }
        };

        try {
            const response = await this.messaging.sendToDevice(to, payload);
            console.log('Push notification sent successfully:', response);
        } catch (error) {
            console.error('Error sending push notification:', error);
        }
    }
}

export  {PushNotificationService};
