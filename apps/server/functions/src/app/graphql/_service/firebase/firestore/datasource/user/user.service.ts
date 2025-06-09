import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";
import { User } from "@supabase/supabase-js";
import { NextStepHomeRepairUsersPath } from "../../../../../../../lib/util/util";
import { DatasourceService } from "../_datasource.service";

@Injectable()
export class UserService {
  collectionName = NextStepHomeRepairUsersPath;

  constructor(private datasource: DatasourceService) { }

  async createProfiles() {
    const users = await this.getAllUsers();
    return users.map(async (user: User) => await this.datasource.setIndividual(`${NextStepHomeRepairUsersPath}/${user.id}/profile/${user.id}`, () => {
      return this.createProfile();
    }));
  }

  createProfile() {
    return {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      jobType: faker.name.jobType(),
      jobDescription: faker.name.jobDescriptor(),
      jobArea: faker.name.jobArea()
    }
  }

  async getAllUsers() {
    return await this.datasource.getAll<User>(NextStepHomeRepairUsersPath);
  }

  async deleteIndividual() {
    return this.datasource.deleteIndividual(NextStepHomeRepairUsersPath)
  }
}