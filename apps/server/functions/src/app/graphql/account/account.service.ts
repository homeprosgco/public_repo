/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { NextStepHomeRepairAccountsPath } from '../../util/util';
import { AccountProfile } from '../../graphql.schema.interface';
import { DatasourceService } from '../_service/firebase/firestore/datasource/_datasource.service';

@Injectable()
export class AccountService { 

  create: any[] = [];

  constructor(private datasource: DatasourceService) {}

  addCreationEntities(...entities: any[]) {
    this.create.push(entities);
  }

  async createAll() {
    const populateAccount = this.create.map(async (cb) => await this.forEach(cb));
    return (await Promise.all(populateAccount)).flat();
  }

  async accountIds() {
    return (await this.datasource.getAll<AccountProfile>(NextStepHomeRepairAccountsPath))
      .map(account => account.id);
  }

  async accounts() {
    return await this.datasource.getAll<AccountProfile>(`${NextStepHomeRepairAccountsPath}`)
  }

  async getById(accountId: string) {
    return await this.datasource.getDocument<AccountProfile>(`${NextStepHomeRepairAccountsPath}/${accountId}`)
  }

  async getAccountUsers(accountId: string) {
    return await this.getById(accountId).then(account => account.userIds)
  }

  async forEach<T>(cb: (accountId: string) => Promise<T[]>) {
    const _accountIds = await this.accountIds();
    const documents = _accountIds.map(async _accountId => {
      console.log(_accountId)
      return await cb(_accountId);
    });

    return (await Promise.all(documents)).flat();
  }

}
