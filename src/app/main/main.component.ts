import { Component, OnInit , ViewChild  } from '@angular/core';
import {ResultsService } from '../services/results.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
 import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class mainComponent implements OnInit{
    
  allUsers=[];
  vcRef;
  constructor(public resultService :ResultsService ,
              private router : Router,
              public toastr: ToastsManager ) { }
 //On click of each user this function is called which opens the album page and passes user id as parameter
  openAlbum(id){
      this.router.navigate(['albums',id]);
  }

  ngOnInit() {
        this.resultService.getAllUsers().subscribe((data:any) => {
        this.allUsers=data;
         },(error)=>{
            this.toastr.setRootViewContainerRef(this.vcRef);
         })
    }
}


