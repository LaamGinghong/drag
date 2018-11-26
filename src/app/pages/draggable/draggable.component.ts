import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {
  @ViewChild('box') box: ElementRef;
  mouseLeft: number;
  mouseTop: number;

  constructor(
    private renderer2: Renderer2
  ) {
  }

  ngOnInit(): void {
  }

  drag(e: MouseEvent): void {
    this.mouseLeft = e.clientX - this.box.nativeElement.offsetLeft;
    this.mouseTop = e.clientY - this.box.nativeElement.offsetTop;
  }

  drop(e: MouseEvent): void {
    this.renderer2.setStyle(this.box.nativeElement, 'left', `${e.clientX - this.mouseLeft}px`);
    this.renderer2.setStyle(this.box.nativeElement, 'top', `${e.clientY - this.mouseTop}px`);
  }
}
