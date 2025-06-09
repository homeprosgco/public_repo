import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OriginLocationInput, Truckstop } from '../../../graphql.schema.interface';
import { TruckstopService } from './truckstop.service';


@Resolver('Truckstop')
export class TruckstopResolver {

  constructor(private truckstopSvc: TruckstopService) { }

  @Query()
  async truckstop(): Promise<Truckstop> {
    return await this.truckstopSvc.truckstop();
  }

  @Mutation()
  async login() {
    return this.truckstopSvc.truckstopLogin();
  }

  @Mutation()
  async loadSearch(@Args('input') { city, state }: OriginLocationInput) {
    const truckstop = await this.truckstopSvc.searchLoads({ city, state });
    console.log(truckstop);
    return truckstop;
  }

}