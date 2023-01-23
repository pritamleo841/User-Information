import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {
    path:'',
    component:UserInfoComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
