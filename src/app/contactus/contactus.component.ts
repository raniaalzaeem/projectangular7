import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  
  contactusdata =[]
  selectedObj={}
  selectedObjforedit ={}
  selectedObjafteredit ={}

  isActive=true;
  isActiveEditBtn=true;

  id:number;
  websittitle:string;
  websiturl:string;
  email:string;
  mobile:number;
  tel:number;
  address:string;
  

  constructor(private manageservice:ManageService) { }


  ngOnInit() {
    this.manageservice.getsetting().subscribe(res =>{
      this.contactusdata =  res 
      console.log(this.contactusdata)
    })
  }

   getsetting(){
    this.manageservice.getsetting().subscribe(res =>{
      this.contactusdata =  res 
      console.log(this.contactusdata)
    })
   }

  //  addNewSetting(myform){
  //    console.log(myform)
  //   alert("1");
  //   let form=myform;
  //   let obj={
  //     id:form.controls.id.value,
  //     title:form.controls.title.value,
  //     description:form.controls.description.value
  //   };  
  //  //alert(obj.id);
  //   if(obj.id != null && obj.title != null && obj.description != null  && obj.title != null ){
  //     this.manageservice.addNewSetting(obj).subscribe(res =>this.selectedObj = res )
  //   console.log("add")
  //   }else{
  //     console.log("can not add")

  //   }
  // }

  editsettingbtn(){
    if(this.selectedObjforedit!=null){
      this.manageservice.editSettingData(this.selectedObjforedit).subscribe(res =>this.selectedObjafteredit = res ) 
      console.log("edit")   
    }else{
      console.log("can not edit")   

    }
  }

  editsetting(id){
    //alert(id);
    this.isActiveEditBtn=!this.isActiveEditBtn;
    this.manageservice.getSettingById(id).subscribe(res =>{
      this.selectedObjforedit = res
      //this.editproductbtn(this.selectedObjforedit);

    } )

  }

  // deletesetting(id){
  // // alert(id);
  //   this.manageservice.deletePostByID(id).subscribe(res =>this.selectedObj = res )
  // }

  resetForm(myform){
    myform.reset()
  }

}
