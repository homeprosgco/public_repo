import { Resolver, Query } from '@nestjs/graphql';
import { Author } from '../../graphql.schema.interface';


@Resolver('Author')
export class AuthorResolver {

  @Query()
  author(): Author {
    return {
      firstName: 'Juan'
    }
  }
  
}