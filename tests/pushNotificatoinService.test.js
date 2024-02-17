// PushNotificationService.test.js
import { PushNotificationService } from '../services/pushNotificationService';

describe('PushNotificationService', () => {
  let pushNotificationService;

  beforeAll(() => {
    pushNotificationService = new PushNotificationService();
  });

  it('should send push notification successfully', async () => {
    const to = 'deviceToken';
    const message = 'Test push notification message';

    // Mock Firebase Messaging's sendToDevice method
    const sendToDeviceMock = jest.fn(() => Promise.resolve({ successCount: 1 }));
    pushNotificationService.messaging.sendToDevice = sendToDeviceMock;

    await pushNotificationService.sendNotification(to, message);

    expect(sendToDeviceMock).toHaveBeenCalledWith(to, {
      notification: {
        title: 'Your Notification Title',
        body: message,
      },
    });

  });

  afterAll(() => {
    // cleanup 
  });
});
