import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {ManageService} from '../manage.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  LoginObj;
  constructor(private router: Router,private manageservice:ManageService) {}

  ngOnInit() {
    this.manageservice.getLogin().subscribe( res => {
      console.log(res,"hhhh");
      this.LoginObj = res;
      console.log(this.LoginObj,"kkk")

    })
  }

  Logout(){
    //alert("Logout rania")
    this.router.navigate(["/"]);
  }
  


  Products(){
    //alert("Products rania")
    this.router.navigate(["products"]);

 }
 

 Catugary(){
  //alert("Catugary rania")
  this.router.navigate(["catugary"]);

}


AboutUs(){
  //alert("post rania")
  this.router.navigate(["post"]);

}


ContactUs(){
  //alert("ContactUs rania")
  this.router.navigate(["contactus"]);

}

}
