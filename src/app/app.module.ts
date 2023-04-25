import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaExamenComponent } from './pantalla-examen/pantalla-examen.component';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    AppComponent,
    PantallaExamenComponent,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    MessagesModule
   
    


  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
