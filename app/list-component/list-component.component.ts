import { Component, Input, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-list-component',
  templateUrl:'./list-component.component.html',
  styleUrls:['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Input() list:[] = [];
  postListFromService:[]=[];
  @Input() list1:any [] = [];
  listFromService:any [] = [];
  constructor(private service:DemoService) { }
  ngOnInit(): void {
    this.service.getPosts().subscribe(res => {
      this.postListFromService= res;
      console.log(this.postListFromService);
    })
  }
  userClicked(element: any) {
    alert('USER CLICK' + element)
  }
  handleClickFromChild(event:any) {
    alert('User Clicked On Child With Id : ' + event)
  }
}