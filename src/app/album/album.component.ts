import { Component, OnInit } from '@angular/core';
import {ResultsService} from '../services/results.service';
import {CommonService} from '../services/common.service';
import {Router,ActivatedRoute} from '@angular/router';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private resultsService : ResultsService, 
              private activatedRoute :ActivatedRoute,
              private router:Router,
              private commonService:CommonService,
              public toastr: ToastsManager) { }

   albums=[];
   selectedAlbums=[];
   vcRef;
 //On page load the id passed from selectionof user is passed as parameter and fetched here to make http call to load albums
  ngOnInit() {
    this.commonService.selectedIds=[];
    let id=this.activatedRoute.snapshot.params['userId']
    this.resultsService.getAlbumByUser(id).subscribe((data:any)=>{
        this.albums=data;
    },(error)=>{
        this.toastr.setRootViewContainerRef(this.vcRef);
     })
  }

 //This is called when to  fetch the photos of selected albums and store it an array in commonservice so that the array can be fetched in photots component  
 openPhotosInAlbum(){
     this.commonService.photos=[];
     this.commonService.selectedIds.forEach((id)=>{
            this.resultsService.getPhotosByAlbum(id).subscribe((data)=>{
                 this.commonService.photos.push(data);
                  if(this.commonService.selectedIds.length>1 && this.commonService.photos.length>1){
                      this.router.navigate(['photos']);
                  }else if(this.commonService.selectedIds.length==1){
                      this.router.navigate(['photos']);
                  }
                
        },(error)=>{
            this.toastr.setRootViewContainerRef(this.vcRef);
         })
        
  })
     
    
 }

 //This function is called to set the active class to selected list items
  setSelctedClass(id){
      if(this.commonService.selectedIds.indexOf(id)!=-1){
          return true;
      }else{
          return false;
      }
  }
    
   //This is called when user clicks on any list item , this adds the selected item to this.commonService.selectedIds, when user deselets the list itme then id is removed from array

    addSelctedAlbumsId(id){
        var selctedItemIndex=this.commonService.selectedIds.indexOf(id);
        if(selctedItemIndex==-1){
             this.commonService.selectedIds.push(id);
        }else{
             this.commonService.selectedIds.splice(selctedItemIndex,1);
        }
       
    }

}
