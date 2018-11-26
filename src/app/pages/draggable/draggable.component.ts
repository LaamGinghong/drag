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
  body: Element;

  constructor(
    private renderer2: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.body = document.body;
  }

  drag(e: MouseEvent): void {
    this.mouseLeft = e.clientX - this.box.nativeElement.offsetLeft;
    this.mouseTop = e.clientY - this.box.nativeElement.offsetTop;
  }

  drop(e: MouseEvent): void {
    if (e.clientX - this.mouseLeft < 0 && e.clientY - this.mouseTop < 0) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `0px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `0px`);
      return;
    }
    if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth && e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `${this.body.clientWidth - 200}px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `${this.body.clientHeight - 200}px`);
      return;
    }
    if (e.clientX - this.mouseLeft < 0 && e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `0px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `${this.body.clientHeight - 200}px`);
      return;
    }
    if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth && e.clientY - this.mouseTop < 0) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `${this.body.clientWidth - 200}px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `0px`);
      return;
    }
    if (e.clientX - this.mouseLeft < 0) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `0px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `${e.clientY - this.mouseTop}px`);
      return;
    }
    if (e.clientY - this.mouseTop < 0) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `${e.clientX - this.mouseLeft}px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `0px`);
      return;
    }
    if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `${this.body.clientWidth - 200}px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `${e.clientY - this.mouseTop}px`);
      return;
    }
    if (e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `${e.clientX - this.mouseLeft}px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `${this.body.clientHeight - 200}px`);
      return;
    }
    this.renderer2.setStyle(this.box.nativeElement, 'left', `${e.clientX - this.mouseLeft}px`);
    this.renderer2.setStyle(this.box.nativeElement, 'top', `${e.clientY - this.mouseTop}px`);
  }
}
