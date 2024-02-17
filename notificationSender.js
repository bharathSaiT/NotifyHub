import { SMSService } from './services/smsService';
import { EmailService } from './services/emailService';
import { PushNotificationService } from './services/pushNotificationService';
import { twilioConfig } from './twilioConfig'; // Twilio credentials
import { emailConfig } from './config/emailConfig';// Email configuration

const smsService = new SMSService(twilioConfig.accountSid, twilioConfig.authToken, twilioConfig.twilioPhoneNumber);
const emailService = new EmailService(emailConfig);
const pushNotificationService = new PushNotificationService();

//send notifications
const recipientPhoneNumber = '+1234567890';
const recipientEmail = 'recipient@example.com';

const smsMessage = 'Hello from your SMS notification service!';
const emailSubject = 'Notification';
const emailMessage = 'Hello from your email notification service!';
let deviceToken ;

smsService.sendNotification(recipientPhoneNumber, smsMessage);
emailService.sendNotification(recipientEmail, emailSubject, emailMessage);
pushNotificationService.sendNotification( deviceToken , pushNotificationMessage);

