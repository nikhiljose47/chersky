import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MobileHomeComponent } from './components/mobiles/mobile-home/mobile-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/page', pathMatch: 'full' },
  {
    path: 'page', component: HomeComponent,
    children: [
      {
        path: 'mobile-phones',
        component: MobileHomeComponent,
        children: [
          {
            path: 'mobile-phones',
            component: MobileHomeComponent
          }
        ]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
