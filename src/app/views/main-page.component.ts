import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataApiService } from '../services/data-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  modalOpen = false;
  linkId = '';
  constructor( private dataApi : DataApiService) { }
  youtubeForm = new FormGroup({
    link:new FormControl('',[Validators.required,Validators.pattern(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/g)])
  })
  ngOnInit(): void {
 
   
  }
  onSubmit(){
    console.log("dsldsaşdas")
 
      this.youtubeForm.value.link = this.youtubeForm.value.link.split(/(?:=|embed\/)/);
      this.linkId = this.youtubeForm.value.link[1]
      this.modalOpen = !this.modalOpen
       console.log(this.linkId)
       console.log(this.modalOpen)
      

  }
  modalChange(open : boolean){
    this.modalOpen = open
 console.log(this.modalOpen)
  }
}
