import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const dashboardRoute = '/account/dashboard';

const routes: Routes = [
  {
    path: "account",
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: "",
    loadChildren: () => import('./feature/_graphql/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "temp",
    loadChildren: () => import('./feature/_graphql/temp/temp-app.module').then(m => m.TempAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
