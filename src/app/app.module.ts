import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { CurddataComponent } from './curddata/curddata.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    CurddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
