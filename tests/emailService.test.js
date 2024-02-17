// EmailService.test.js
import { EmailService } from '../services/emailService';
import { emailConfig } from '../config/emailConfig';

describe('EmailService', () => {
  let emailService;

  beforeAll(() => {
    emailService = new EmailService(emailConfig);
  });

  it('should send email successfully', async () => {
    const to = 'recipient@example.com';
    const subject = 'Test Subject';
    const message = 'Test email message';

    // Mock nodemailer's sendMail method
    const sendMailMock = jest.fn(() => Promise.resolve({ messageId: 'mockMessageId' }));
    emailService.transporter.sendMail = sendMailMock;

    await emailService.sendNotification(to, subject, message);

    expect(sendMailMock).toHaveBeenCalledWith({
      from: emailConfig.auth.user,
      to: to,
      subject: subject,
      text: message,
    });
  });


  afterAll(() => {
  });
});
