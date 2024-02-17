// SMSService.test.js
import { SMSService } from '../services/smsService'
import { twilioConfig } from '../config/smsConfig';

const { accountSid, authToken, twilioPhoneNumber } = twilioConfig;

describe('SMSService', () => {
  let smsService;

  beforeAll(() => {
    smsService = new SMSService(accountSid, authToken, twilioPhoneNumber);
  });

  it('should send SMS successfully', async () => {
    const to = '+1234567890';
    const message = 'Test SMS Message';

    const createMessageMock = jest.fn(() => Promise.resolve({ sid: 'mockSid' }));
    smsService.client.messages.create = createMessageMock;

    await smsService.sendNotification(to, message);

    expect(createMessageMock).toHaveBeenCalledWith({
      body: message,
      from: twilioPhoneNumber,
      to: to,
    });
  });



  afterAll(() => {
    //Cleanup
  });
});
