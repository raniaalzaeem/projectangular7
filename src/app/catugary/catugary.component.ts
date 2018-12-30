import { Component, OnInit } from '@angular/core';
import {ManageService} from '../manage.service'

@Component({
  selector: 'app-catugary',
  templateUrl: './catugary.component.html',
  styleUrls: ['./catugary.component.css']
})
export class CatugaryComponent implements OnInit {

 
  allcatugaries=[]
  selectedObj ={}
  selectedObjforedit ={}
  selectedObjafteredit ={}
  allproducts=[]

  isActive=true;
  isActiveEditBtn=true;
  isActiveViewProduct=true;
  id:number;
  title:string;
  description:Text;
  

  constructor(private manageservice:ManageService) { }


  ngOnInit() {
    this.manageservice.getcat().subscribe(res =>{
      this.allcatugaries =  res 
      console.log(this.allcatugaries)
    })
  }

   getallcat(){
    this.manageservice.getcat().subscribe(res =>{
      this.allcatugaries =  res 
      console.log(this.allcatugaries)
    })
   }


   addNewCatugary(myform){
     console.log(myform)
    //alert("1");
    let form=myform;
    let obj={
      id:form.controls.id.value,
      title:form.controls.title.value,
      description:form.controls.description.value
    };  
   //alert(obj.id);
    if(obj.id != null && obj.title != null && obj.description != null  && obj.title != null ){
      this.manageservice.addNewCatugary(obj).subscribe(res =>this.selectedObj = res )
    console.log("add")
    }else{
      console.log("can not add")

    }
  }

  editcatugarybtn(){
    //let obj=this.selectedObjforedit
    if(this.selectedObjforedit!=null){
      this.manageservice.editCatugaryData(this.selectedObjforedit).subscribe(res =>this.selectedObjafteredit = res ) 
      console.log("edit")   
    }else{
      console.log("can not edit")   

    }
  }

  editcatugary(id){
    //alert(id);
    this.isActiveEditBtn=!this.isActiveEditBtn;
    this.manageservice.getCatugaryById(id).subscribe(res =>{
      this.selectedObjforedit = res
      //this.editproductbtn(this.selectedObjforedit);

    } )

  }



  showItem(id){
    this.isActive=!this.isActive;
    this.manageservice.getCatugaryById(id).subscribe(res =>this.selectedObj = res )
  }

  deletecatugary(id){
  // alert(id);
    this.manageservice.deleteCatugaryByID(id).subscribe(res =>this.selectedObj = res )
  }
  resetForm(myform){
    myform.reset()
  }
  // showProduct(id){
  //   this.isActiveViewProduct=!this.isActiveViewProduct;
  //   this.manageservice.getProductByCatId(id).subscribe(res =>this.allproducts = res )
  // }
}
