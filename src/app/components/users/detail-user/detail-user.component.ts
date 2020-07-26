import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/BusinessObject/user';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';
import { UserService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService:UserService,private location:Location,private router:Router) { }

  id:number;
  user:User=null;

  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>this.id=param.id);
    this.userService.getUserById(this.id).subscribe(data=> {this.user=data
      console.log(this.user.Email);
      console.log(this.user.Number.length);
    });

  }

  onBackClick(){
    this.location.back();
  }
  remove(){
    this.userService.DeleteUser(this.user.UserID).subscribe(data=>this.user=data);
    this.router.navigate(['/user'])
  }


}
