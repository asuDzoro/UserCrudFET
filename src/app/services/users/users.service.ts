import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../../BusinessObject/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private API = 'http://localhost:54999/api';
  private USER_API = `${this.API}/user/`;

  getAllUser():Observable<Array<User>>{
    return this.http.get<Array<User>>(this.USER_API);
  }

  getUserById(Id:number):Observable<User>{
    return this.http.get<User>(this.USER_API+Id);
  }

  SaveUser(user:User):Observable<User>{
    let result : Observable<User>;
    console.log(user.UserID);
    if(user.UserID){
      return this.http.put<User>(`${this.USER_API}/${user.UserID}`,user);
    }
    else{
      return this.http.post<User>(this.USER_API,user);
    }
  }

  DeleteUser(id:number):Observable<User>{
    return this.http.delete<User>(`${this.USER_API}/${id.toString()}`);
  }
}
