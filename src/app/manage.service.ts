import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './Modules/product'
import { IUser } from './modules/user'
import { ISetting } from './Modules/setting'
import { IPost} from './Modules/post'
import { ICat} from './Modules/cat'
//import { HttpParams } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  isLogedIn=new Subject<boolean>();

  private _url : string ="http://localhost:3000/products";
  private _url1 : string ="http://localhost:3000/catugary";
  private _url2 : string ="http://localhost:3000/posts";
  private _url3 : string ="http://localhost:3000/setting";
  private _url4 : string ="http://localhost:3000/user";

  

  // private httpparam : HttpParams
  constructor(private http : HttpClient) { }

  setLogin(isSuccess){
    console.log(isSuccess,"ssss")
    this.isLogedIn.next(isSuccess);
    console.log(this.isLogedIn,"ggg")
  }
  getLogin(){
    return this.isLogedIn.asObservable();
  }
  getproduct():Observable<IProduct[]>{
    //alert("rania2");
    return this.http.get<IProduct[]>(this._url)
  }
  addNewProduct(obj){
    //alert("2");
    return this.http.post<IProduct>(this._url,obj)
  }
  editProductData(obj){
    return this.http.put<IProduct>(`${this._url}/${obj.id}`,obj)
  }
  getProductById(id):Observable<IProduct>{
    //alert("getProductById");
    //alert("id"+id)
    return this.http.get<IProduct>(`${this._url}/${id}`)
  }
  deleteProductByID(id){
    //alert("deleteProductByID");
    //alert("id"+id)
    return this.http.delete<IProduct>(`${this._url}/${id}`)  // delete
  }
  
  getcat():Observable<ICat[]>{
    //alert("rania2");
    return this.http.get<ICat[]>(this._url1)
  }
  addNewCatugary(obj){
    //alert("2");
    return this.http.post<ICat>(this._url1,obj)
  }
  editCatugaryData(obj){
    return this.http.put<ICat>(`${this._url1}/${obj.id}`,obj)
  }
  getCatugaryById(id):Observable<ICat>{
    //alert("getProductById");
    //alert("id"+id)
    return this.http.get<ICat>(`${this._url1}/${id}`)
  }
  deleteCatugaryByID(id){
    //alert("deleteProductByID");
    //alert("id"+id)
    return this.http.delete<ICat>(`${this._url1}/${id}`)  // delete
  }
  // public getProductByCatId(catid):Observable<IProduct[]>{
  //   let httpp = new HttpParams().set('catid',catid);  
  //   return this.http.get<IProduct[]>(this._url,{params:httpp});
  //    }

  getpost():Observable<IPost[]>{
    //alert("rania2");
    return this.http.get<IPost[]>(this._url2)
  }
  addNewPost(obj){
    //alert("2");
    return this.http.post<IPost>(this._url2,obj)
  }
  editPostData(obj){
    return this.http.put<IPost>(`${this._url2}/${obj.id}`,obj)
  }
  getPostById(id):Observable<IPost>{
    //alert("getProductById");
    //alert("id"+id)
    return this.http.get<IPost>(`${this._url2}/${id}`)
  }
  deletePostByID(id){
    //alert("deleteProductByID");
    //alert("id"+id)
    return this.http.delete<IPost>(`${this._url2}/${id}`)  // delete
  }

  getsetting():Observable<ISetting[]>{
    //alert("rania2");
    return this.http.get<ISetting[]>(this._url3)
  }
  addNewSetting(obj){
    //alert("2");
    return this.http.post<ISetting>(this._url3,obj)
  }
  editSettingData(obj){
    return this.http.put<ISetting>(`${this._url3}/${obj.id}`,obj)
  }
  getSettingById(id):Observable<ISetting>{
    //alert("getProductById");
    //alert("id"+id)
    return this.http.get<ISetting>(`${this._url3}/${id}`)
  }
  deleteSettingByID(id){
    //alert("deleteProductByID");
    //alert("id"+id)
    return this.http.delete<ISetting>(`${this._url3}/${id}`)  // delete
  }
  
  getusers():Observable<IUser[]>{
    //alert("rania2");
    return this.http.get<IUser[]>(this._url4)
  }
}
