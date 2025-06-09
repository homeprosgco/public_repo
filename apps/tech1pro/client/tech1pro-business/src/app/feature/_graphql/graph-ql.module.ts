import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { TempAppModule } from './temp/temp-app.module';
import { ApolloConfig } from 'src/app/config/apollo-graphql-config';
import { UserModule } from './account/user/user.module';
import { UserService } from './account/user/user.service';
import { RouterModule } from '@angular/router';
import { AppGraphQLComponent } from './graphql.component';


@NgModule({
  declarations: [AppGraphQLComponent],
  imports: [
    CommonModule,
    ApolloModule,
    TempAppModule,
    UserModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppGraphQLComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
          }
        ]
      }
    ])
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: ApolloConfig,
      deps: [HttpLink, UserService],
    },
  ],
})
export class GraphQLModule { }
