import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postList:[]=[];
  @Output() userClickedOnPost= new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  handleClickedOnPost(id: string ){
    this.userClickedOnPost.emit(id);
  }
}