import { Component, OnInit } from '@angular/core';
import { User } from '../../BusinessObject/user';
import { UserService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  allUser:User[]
  status:string="Active";
  
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data=>this.allUser=data);
  }

}
