import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()title: string;
  @Input()content: string;
  loveIts: number = 0;
  @Input() created_at: Date;

  constructor() { }
  onLove(){
    this.loveIts=this.loveIts + 1;
    console.log(this.loveIts)
  }
   onHate(){
    this.loveIts=this.loveIts - 1; 
   }
   

  ngOnInit() {
  }
  

}
