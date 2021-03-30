import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { ListComponentComponent } from './list-component/list-component.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    PostComponent,
    ContactComponent,
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
      ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }