import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
 
  constructor(private userService: HttpService) {
  }
 
  ngOnInit() {
    this.getall();
    
  }
  getall(){
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    console.log("in get all");
  }

  delete(user: Number): void { 
   
    this.userService.deleteUser(user).subscribe((user)=>{
      console.log("I am in delete: ", user);
      this.getall();
    });
    
  }

}
