import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';


const routes: Routes = [
  {path:"",component:UsersComponent},
  {path:"user",component:UsersComponent},
  {path:"user/add",component:AddUserComponent},
  {path:"user/modify/:id",component:AddUserComponent},  
  {path:"user/delete/:id",component:UsersComponent},  
  {path:"user/detail/:id",component:DetailUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
