import { Component, OnInit } from '@angular/core';
import{ManageService} from '../manage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allproducts=[]
  selectedObj ={}
  selectedObjforedit ={}
  selectedObjafteredit ={}
  allcat=[]


  isActive=true;
  isActiveEditBtn=true;

  // id="";
  // name="";
  // price=0;
  // quantity=0;
  // code="";
  // description="";
  // catid=0;

  id:number;
name:string;
price:number;
quantity:number;
code:string;
description:Text;
catid:number;
  

  constructor(private manageservice:ManageService) { }


  ngOnInit() {
    this.manageservice.getproduct().subscribe(res =>{
      this.allproducts =  res 
      console.log(this.allproducts)
    })
    this.manageservice.getcat().subscribe(res =>{
      this.allcat =  res 
      console.log(this.allproducts)
    })
  }

 
  printproductData(){
    this.manageservice.getproduct().subscribe(res =>{
      this.allproducts =  res 
      console.log(this.allproducts)
    })
   }

   getallcat(){
    this.manageservice.getcat().subscribe(res =>{
      this.allcat =  res 
      console.log(this.allproducts)
    })
   }


   addNewProduct(myform){
     console.log(myform)
    //alert("1");
    let form=myform;
    let obj={
      id:form.controls.id.value,
      name:form.controls.name.value,
      price:form.controls.price.value,
      quantity:form.controls.quantity.value,
      code:form.controls.code.value,
      description:form.controls.description.value,
      catid:form.controls.catid.value
    };  
   //alert(obj.id);
    if(obj.id != null && obj.name != null && obj.price != null &&  obj.quantity != null && obj.code != null && obj.description != null  && obj.catid != null ){
      this.manageservice.addNewProduct(obj).subscribe(res =>this.selectedObj = res )
    console.log("add")
    }else{
      console.log("can not add")

    }
  }

  editproductbtn(){
    //let obj=this.selectedObjforedit
    if(this.selectedObjforedit!=null){
      this.manageservice.editProductData(this.selectedObjforedit).subscribe(res =>this.selectedObjafteredit = res ) 
      console.log("edit")   
    }else{
      console.log("can not edit")   

    }
  }

  editproduct(id){
    //alert(id);
    this.isActiveEditBtn=!this.isActiveEditBtn;
    this.manageservice.getProductById(id).subscribe(res =>{
      this.selectedObjforedit = res
      //this.editproductbtn(this.selectedObjforedit);

    } )

  }



  showItem(id){
    this.isActive=!this.isActive;
    this.manageservice.getProductById(id).subscribe(res =>this.selectedObj = res )
  }

  deleteproduct(id){
  // alert(id);
    this.manageservice.deleteProductByID(id).subscribe(res =>this.selectedObj = res )
  }
  resetForm(myform){
    myform.reset()
  }

}
