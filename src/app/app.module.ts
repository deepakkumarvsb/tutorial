import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from './gallery/gallery.service';
import { AppComponent } from './app.component';
import { galleryReducer } from './store/gallery.reducer';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [
    StoreModule.forRoot({ gallery: galleryReducer }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
