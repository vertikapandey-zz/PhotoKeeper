import { NgModule } from '@angular/core';

import { mainComponent } from './main/main.component';

import { HeaderComponent } from './header/header.component';

import {AlbumComponent} from './album/album.component';

import {PhotosComponent} from './photos/photos.component';

import {PageNotFoundComponent} from './pageNotFound/notFound.component'

import { Routes, RouterModule } from '@angular/router';


//All the routes of the application
const appRoutes :Routes =[
    {path:'' , component:mainComponent},
    {path:'albums/:userId' , component:AlbumComponent},
    {path:'photos' , component:PhotosComponent},
    {path:'notfound' , component:PageNotFoundComponent},
    {path:'**' , redirectTo:'notfound'}
]
@NgModule({

  imports: [
   RouterModule.forRoot(appRoutes)
   ],
   exports:[RouterModule]

})
export class AppRoutingModule { }
