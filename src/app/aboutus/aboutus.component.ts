import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  
  allpost=[]
  selectedObj ={}
  selectedObjforedit ={}
  selectedObjafteredit ={}

  isActive=true;
  isActiveEditBtn=true;
  isActiveViewProduct=true;

  id:number;
  title:string;
  description:Text;
  

  constructor(private manageservice:ManageService) { }


  ngOnInit() {
    this.manageservice.getpost().subscribe(res =>{
      this.allpost =  res 
      console.log(this.allpost)
    })
  }

   getallpost(){
    this.manageservice.getpost().subscribe(res =>{
      this.allpost =  res 
      console.log(this.allpost)
    })
   }


   addNewPost(myform){
     console.log(myform)
    alert("1");
    let form=myform;
    let obj={
      id:form.controls.id.value,
      title:form.controls.title.value,
      description:form.controls.description.value
    };  
   //alert(obj.id);
    if(obj.id != null && obj.title != null && obj.description != null  && obj.title != null ){
      this.manageservice.addNewPost(obj).subscribe(res =>this.selectedObj = res )
    console.log("add")
    }else{
      console.log("can not add")

    }
  }

  editpostbtn(){
    if(this.selectedObjforedit!=null){
      this.manageservice.editPostData(this.selectedObjforedit).subscribe(res =>this.selectedObjafteredit = res ) 
      console.log("edit")   
    }else{
      console.log("can not edit")   

    }
  }

  editpost(id){
    //alert(id);
    this.isActiveEditBtn=!this.isActiveEditBtn;
    this.manageservice.getPostById(id).subscribe(res =>{
      this.selectedObjforedit = res
      //this.editproductbtn(this.selectedObjforedit);

    } )

  }

  showItem(id){
    this.isActive=!this.isActive;
    this.manageservice.getPostById(id).subscribe(res =>this.selectedObj = res )
  }

  deletepost(id){
  // alert(id);
    this.manageservice.deletePostByID(id).subscribe(res =>this.selectedObj = res )
  }

  resetForm(myform){
    myform.reset()
  }

}
