import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppComponent } from './app.component';
import { mainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import {ResultsService} from './services/results.service';
import {HttpClientModule} from '@angular/common/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import {AppRoutingModule} from './app.routing';
import {AlbumComponent} from './album/album.component';
import {PhotosComponent} from './photos/photos.component';
import {CommonService} from './services/common.service';
import {PageNotFoundComponent} from './pageNotFound/notFound.component'

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    HeaderComponent,
    AlbumComponent,
    PhotosComponent,
    PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    MatTabsModule
 ],
  providers: [ResultsService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
