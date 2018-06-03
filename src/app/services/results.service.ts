import {
  Injectable,
  Renderer2
 }
 from '@angular/core';

 import {
  HttpClient,
  HttpParams

 }
 from '@angular/common/http';
import 'rxjs/Rx';

 import {
  Observable
 }
 from 'rxjs/Observable';


 import {catchError  } from 'rxjs/operators';
 
 
 @Injectable()
 
 export class ResultsService {
 
  constructor(private httpClient: HttpClient) {}
 
  resultsData;
 
  //http call to fetch all users
  getAllUsers() {
   return this.httpClient.get('https://jsonplaceholder.typicode.com/users', {
    observe: 'body',
    responseType: 'json'
    
    }).catch((error)=>{
       return Observable.throw("Error Occured in processing reuquest");
   })
 
  }

  //http call to fetch all albums of selcted user
  getAlbumByUser(id) {
   return this.httpClient.get('https://jsonplaceholder.typicode.com/albums', {
    observe: 'body',
    responseType: 'json',
    params: new HttpParams().set('userId', id)
    }).catch((error)=>{
       return Observable.throw("Error Occured in processing reuquest");
   })
 
  }
    
   //http call to fetch all photos of selcted album
  getPhotosByAlbum(id) {
   return this.httpClient.get('https://jsonplaceholder.typicode.com/photos', {
    observe: 'body',
    responseType: 'json',
    params: new HttpParams().set('albumId', id)
    }).catch((error)=>{
       return Observable.throw("Error Occured in processing reuquest");
   })
 
  }

 }
 
