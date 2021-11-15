import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { PChildComponent } from './components/parent/p-child/p-child.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: 'test', component: ParentComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: AddUserComponent },
  { path: 'add', component: AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
