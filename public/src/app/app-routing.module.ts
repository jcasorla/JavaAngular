import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserViewComponent } from './user-view/user-view.component';


//import { HomeComponent } from './home/home.component';
//import { NewComponent } from './new/new.component';
//import { EditComponent } from './edit/edit.component';

// const routes: Routes = [
// //{ path: 'home',component: HomeComponent },
// //   { path: 'new',component: NewComponent },
// //   // use a colon and parameter name to include a parameter in the url
// //   { path: 'edit/:id', component: EditComponent },
// //   // redirect to /alpha if there is nothing in the url
// //   { path: '', pathMatch: 'full', redirectTo: '/home' },
// //   // the ** will catch anything that did not match any of the above routes
// //   // { path: '**', component: PageNotFoundComponent }

// ];

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'edit/:id', component: UserUpdateComponent },
  { path: 'view/:id', component: UserViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
