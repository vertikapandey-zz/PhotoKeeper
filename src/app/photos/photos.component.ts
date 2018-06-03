import { Component, OnInit , OnDestroy} from '@angular/core';
import {CommonService} from '../services/common.service'
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit , OnDestroy {
  constructor(private commonService:CommonService) { }
  photos=[];
  currentPhotoList;
  subscription : Subscription;


//This function is called to set/change the photo list shown on the screen to user 
// when photos array length is more than 1 then photos aer shown in interval of 20sec per album i.e one album photos are shown for 20sec and then next 
setCurrentPhotoList(){
  this.currentPhotoList=this.commonService.photos[0];
  if(this.commonService.photos.length>1){
       this.subscription = Observable.interval(20000).subscribe((num)=>{
         if(this.currentPhotoList==this.commonService.photos[0]){
             this.currentPhotoList=this.commonService.photos[1];
         }else{
             this.currentPhotoList=this.commonService.photos[0];
         }
      });
       
     }
  }

  ngOnInit() {
       this.setCurrentPhotoList();
   }

//This function gets called when user clicks on any image in the page to open the enlarges image in the new window
 openImage(photo){
     window.open(photo.url);
  }

 //this is for unsubribing the interval observable
 ngOnDestroy(){
    if(this.subscription){
        this.subscription.unsubscribe();
    } 
  }
}
