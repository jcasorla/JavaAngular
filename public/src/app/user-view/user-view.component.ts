import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: User;
  editUser: any = {};
  // errors:any;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: HttpService) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id'])
      let id=params['id'];
      
      this.findUser(id);
  });
  }
 
  // onSubmit() {
  //   this.userService.updateUser(this.user).subscribe(result => this.gotoUserList());
  // }

  findUser(id) {
    console.log(id);
    const observable = this.userService.getUser(id);
    observable.subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }
 
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  // onSubmit() {
    
  //   this.userService.updateUser(this.user).subscribe({
  //     next: (data)=>{
  //       this.gotoUserList();
      
  //     },
  //       error: error => {
  //         console.log(error);
  //         // this.errors=error.error;
  
  //     }
      
  //   });
  // }
  

}
