import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html', 
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nume: string = "";
  prenume: string ="";
  mesaj: string ="";

  constructor() {}

  ngOnInit(): void {
  }
  saveMessage(): void {
    alert("Nume: " + this.nume + "Prenume:" + this.prenume + "Mesaj: " + this.mesaj)

  }
}