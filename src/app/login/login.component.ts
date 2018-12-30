import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import {Router} from '@angular/router';
import{ManageService} from '../manage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor(private router: Router,private manageservice:ManageService) { }

  ngOnInit() {
  }
  allusers=[]
  // login(loginForm) : void {

  //   console.log(loginForm);
  //   let password=loginForm.controls.password.value;
  //   let username=loginForm.controls.username.value;
  //   this.manageservice.getusers().subscribe(res =>{
  //     this.allusers =  res.filter(item => {item.username === username && item.password=== password}); 
  //     console.log(this.allusers)
  //   })

  //   if(this.allusers != null){
  //    this.manageservice.setLogin(true);
  //    this.router.navigate(["dashbord"]);

  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }

  login() : void {

    if(this.username=='admin' && this.password =='admin'){
     this.manageservice.setLogin(true);
     this.router.navigate(["dashbord"]);

    }else {
      alert("Invalid credentials");
    }
  }

}


