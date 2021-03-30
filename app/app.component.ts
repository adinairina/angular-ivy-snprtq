import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Raba Bogdan Sda Student';
  firstList = ['elem1', 'elem2', 'elem3', 'elem4'];
  secondList= ['secondElem1', 'secondElem2', 'secondElem3'];
  thirdList = ['1', '2', '3'];
  forList = ['4', '5', '4'];
  userInput='';
  secondUserInput='new value';
}