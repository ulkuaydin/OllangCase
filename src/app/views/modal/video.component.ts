import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnChanges {
 
@Input('modalOpen') modalOpen!: boolean 
@Input('linkId') linkId!: string
@ViewChild('input') input!:ElementRef 
@Output() modalChange = new EventEmitter<boolean>();

url = ''
  constructor(private dataApi : DataApiService,private renderer : Renderer2) { }
 
  ngOnChanges(): void {
    
    
   this.dataApi.getVideo(this.linkId).subscribe((success)=>{
    console.log(success)
  })
 
    this.dataApi.getSubtitle(this.linkId).subscribe((success)=>{
      console.log(success)
    })
    this.url = `https://www.youtube.com/embed/${this.linkId}?autoplay=1&fs=0&showinfo=0&rel=0&start=0&end=0`
    console.log(this.modalOpen)
   
  }
 addInput(){
   const div = this.renderer.createElement('div')
   this.renderer.addClass(div,'flex')
   this.renderer.addClass(div,'flex-row')
   this.renderer.addClass(div,'mb-[0.5rem]')
   const group = this.renderer.createElement('div')
   this.renderer.addClass(group,'flex')
   this.renderer.addClass(group,'flex-col')
  const input = this.renderer.createElement('input')
  this.renderer.setProperty(input,'type','text')
  this.renderer.setProperty(input,'placeholder','Add Subtitle')
  this.renderer.addClass(input,'w-full')
  this.renderer.addClass(input,'border-2')
  this.renderer.addClass(input,'text-black')
  this.renderer.addClass(input,'rounded')
  this.renderer.addClass(input,'outline-0')
  this.renderer.addClass(input,'pb-20')
  this.renderer.addClass(input,'pl-2')
  this.renderer.addClass(input,'font-medium')
  const button = this.renderer.createElement('button')
  this.renderer.setProperty(button,'type','button')
  this.renderer.addClass(button,'filter')
  this.renderer.setStyle(button,'margin','auto 1rem')
  this.renderer.setStyle(button,'width','36px')
  this.renderer.setStyle(button,'height','36px')
  this.renderer.listen(button,'click',()=>this.removeInput(div))
  const svg = this.renderer.createElement('img');
  this.renderer.setProperty(svg,'src','../../../assets/delete_black_24dp.svg')
  this.renderer.appendChild(button,svg)
  const startInput = this.renderer.createElement('input')
  this.renderer.setProperty(startInput,'type','time')
  this.renderer.addClass(startInput,'h-14')
  this.renderer.addClass(startInput,'border-2')
  this.renderer.addClass(startInput,'outline-0')
  this.renderer.addClass(startInput,'mb-5')
  const endInput = this.renderer.createElement('input')
  this.renderer.setProperty(endInput,'type','time')
  this.renderer.addClass(endInput,'h-14')
  this.renderer.addClass(endInput,'border-2')
  this.renderer.addClass(endInput,'outline-0')

  this.renderer.appendChild(div,input)
  this.renderer.appendChild(div,button)
  this.renderer.appendChild(group,startInput)
  this.renderer.appendChild(group,endInput)
  this.renderer.appendChild(div,group)
  this.renderer.appendChild(this.input.nativeElement,div)
 
 }
  removeInput(div : any){
    this.renderer.removeChild(this.input.nativeElement,div)
  }
  toggle(value : boolean){

 this.modalChange.emit(value)
 window.location.reload()
  }

}
