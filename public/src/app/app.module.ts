import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserViewComponent } from './user-view/user-view.component';


// import { CakeComponent } from './cake/cake.component'; // <-- import FormsModule.


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserUpdateComponent,
    UserViewComponent,
    // CakeComponent
  ],
  providers: [
    HttpService
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- register FormsModule with our app.
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
