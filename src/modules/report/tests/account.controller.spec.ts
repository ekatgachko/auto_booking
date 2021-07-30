import { AccountController } from '../account.controller';

describe('AccountController', () => {
  let accountController: AccountController;

  const mockAccountForAllAuto = [
    {
      day: 'Wednesday',
      percent: '51.76470588235294117600',
    },
    {
      day: 'Sunday',
      percent: '54.21686746987951807200',
    },
    {
      day: 'Friday',
      percent: '53.08641975308641975300',
    },
    {
      day: 'Thursday',
      percent: '49.41176470588235294100',
    },
    {
      day: 'Monday',
      percent: '51.19047619047619047600',
    },
    {
      day: 'Tuesday',
      percent: '51.76470588235294117600',
    },
    {
      day: 'Saturday',
      percent: '53.01204819277108433700',
    },
  ];

  const accountService = {
    getAccountAllAuto: () => mockAccountForAllAuto,
    getAccountById: () => mockAccountForAllAuto[2],
  } as any;

  beforeEach(() => {
    accountController = new AccountController(accountService);
  });

  it('should return account for all auto', async () => {
    const res = await accountController.getAccountAllAuto();
    expect(res).toBe(mockAccountForAllAuto);
  });

  it('should return account for auto with id 2', async () => {
    const res = await accountController.getAccountById(2);
    expect(res).toBe(mockAccountForAllAuto[2]);
  });
});
