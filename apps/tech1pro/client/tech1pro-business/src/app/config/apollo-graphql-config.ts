import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../../environments/environment';
import { UserService } from '../feature/_graphql/account/user/user.service';

const uri = environment.uri;
const authOperations = ["authUserCustomSigninToken", "seedAuthUsers", "seedTeamMembers", "activeAccounts", "setActiveAccounts"];

export function ApolloConfig(httpLink: HttpLink, userSvc: UserService) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext(async (operation, context) => {

    if (operation.operationName && authOperations.includes(operation.operationName)) {
      return {};
    }

    const token = await userSvc.getUserIdToken();
    console.log(token)
    if (!token) return {};

    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}