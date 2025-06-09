import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";
import { CompanyProfile } from "../../../../../../graphql.schema.interface";
import { address, createdDate, email, phone } from "../../../../../../../lib/util/util";
import { DatasourceService } from "../_datasource.service";

@Injectable()
export class CompanyProfileService {

  collectionName = 'company-profile';

  constructor(private datasource: DatasourceService) {}

  collectionPath(accountId: string) {
    return this.datasource.collectionPath(accountId, this.collectionName);
  }

  async getCompanyProfile(accountId: string) {
    return await this.datasource.getDocument<CompanyProfile>(this.collectionPath(accountId))
  }

  async createIndividual(accountId: string) {
    return await this.datasource.createIndividual(this.collectionPath(accountId), () => {
      return {
        accountId,
        bio: faker.lorem.paragraph(),
        fax: faker.phone.number(),
        serviceCategory: faker.company.bs(),
        logoURL: faker.image.dataUri(),
        website: faker.internet.domainName(),
        companyName: faker.company.companyName(),
        address: address(),
        created: createdDate(),
        mainEmail: email(),
        mainPhone: phone(),
      }
    }, 1, 1);
  }

  async getAllByAccountId(accountId: string) {
    return await this.datasource.getAll<CompanyProfile>(this.collectionPath(accountId));
  }

  async getAllCompanyIds(accountId: string) {
    return (await this.datasource.getAll(accountId)).map(company => company.id);
  }

  async deleteIndividual(accountId: string) {
    return this.datasource.deleteIndividual(this.collectionPath(accountId))
  }

}