import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from './model/user';
// import { Observable } from 'rxjs/Observable';
import {Observable,of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private usersURL: string;

  constructor(private _http: HttpClient){
    
	  this.usersURL="http://localhost:8080/users";
    
}
public findAll(): Observable<User[]> {
  // return this.http.get<User[]>(this.usersUrl);
  return this._http.get<User[]>(this.usersURL);
}

public save(user: User) {
  return this._http.post<User>(this.usersURL, user);
}

updateUser(data) {
  return this._http.put(this.usersURL+ "/" + data.id, data);
}

deleteUser(user) {
  console.log(user.id);
  return this._http.delete(this.usersURL + '/'  +user.id);
}
getUser(id) {
  console.log("in service " + id);
  return this._http.get<User>(this.usersURL + '/' + id);
}


// getAuthors() {
//   return this._http.get('/api/authors');
// }
// getAuthor(id) {
//   return this._http.get('/api/authors/' + id);
// }

// addAuthor(data){
//   return this._http.post('/api/authors', data)
// }

// updateAuthor(data) {
//   return this._http.put('/api/authors/' + data._id, data);
// }
// deleteAuthor(id) {
//   return this._http.delete('/api/authors/' + id);
// }



}



