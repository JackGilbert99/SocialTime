import { AppState } from '../AppState.js'
import { Account } from "../models/Account";
import { api } from './AxiosService.js'

class AccountService {
  async getAccount() {
   
      const res = await api.get('api/account')
      AppState.account = res.data
      console.log('got accounts', res.data);
      AppState.accounts = res.data.accounts.map(a => new Accounts(a))
    }
  }


export const accountService = new AccountService()
