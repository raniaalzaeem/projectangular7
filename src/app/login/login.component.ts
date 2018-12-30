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
    this.manageservice.getusers().subscribe(res =>{
      this.users =  res; 
      console.log(this.users)
    })
  }
  users=[]
  // login(loginForm)  {

  //   console.log(loginForm);
  //   let password=loginForm.controls.password.value;
  //   let username=loginForm.controls.username.value;
  //   console.log(password);
  //   console.log(username);

  //   if(this.users != null){

  //     for(let x=0; x< this.users.length ;x++){
  //       console.log("1");

  //       if(this.users.find(user => user.username === username)){
  //         console.log("2");

  //         if(this.users.find(user => user.username === username).password == password ){
  //           console.log("3");
          
  //           this.manageservice.setLogin(true);
  //           this.router.navigate(["dashbord"]);
  //         }
  //       }
  //     }

  //   }else {
  //     alert("Invalid Username & password");
  //   }
  // }

  login() : void {

    if(this.username=='admin' && this.password =='admin'){
     this.manageservice.setLogin(true);
     this.router.navigate(["dashbord"]);

    }else {
      alert("Invalid Username & password");
    }
  }

}


