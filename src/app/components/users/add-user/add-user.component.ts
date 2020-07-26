import { Component, OnInit,ViewChild } from '@angular/core';
import { User } from 'src/app/BusinessObject/user';
import { UserService } from 'src/app/services/users/users.service';
import { Route } from '@angular/compiler/src/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User=new User();
  id:number;
  @ViewChild('closebutton') closebutton;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) {
    this.route.params.subscribe((param:Params)=>this.id=param.id);
    if(this.id>0){
      this.userService.getUserById(this.id).subscribe(data=> this.user=data);
    }
   }

  ngOnInit(): void {

  }

  onSubmit(){
      this.userService.SaveUser(this.user).subscribe(data=>
      {
        this.user = data;
        this.router.navigate(['/user/detail',data.UserID]);
      });
    this.closebutton.nativeElement.click();
  }

}
