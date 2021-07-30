import { AccountRepository } from '../account.repository';
import { IAccount } from '../../../common';
import { mockAccount } from './account-mock.constant';

describe('AccountRepository', () => {
  let accountRepository: AccountRepository;

  const mockAccount: IAccount = {
    percent: '34',
    day_of_week: 2,
  };

  const result = {
    rows: mockAccount,
  };

  const dbClient = {
    getClient: () => ({
      query: () => result,
    }),
  } as any;

  beforeEach(() => {
    accountRepository = new AccountRepository(dbClient);
  });

  it('should query account for all auto', async () => {
    const res = await accountRepository.getAccountAllAuto();
    expect(res).toBe(mockAccount);
  });

  it('should query account for auto by id', async () => {
    const res = await accountRepository.getAccountById(2);
    expect(res).toBe(mockAccount);
  });
});

export class MockAccountRepository extends AccountRepository {
  constructor() {
    super({} as any);
  }

  async getAccountById(autoId: number): Promise<IAccount[]> {
    return [mockAccount];
  }

  async getAccountAllAuto(): Promise<IAccount[]> {
    return [mockAccount];
  }
}
