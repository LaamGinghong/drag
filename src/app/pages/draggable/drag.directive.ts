import {Directive, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @Input() box: HTMLElement;
  mouseLeft: number;
  mouseTop: number;
  body = document.body;

  constructor(
    public renderer2: Renderer2
  ) {
  }

  @HostListener('dragstart', ['$event'])
  drag(e: MouseEvent): void {
    this.mouseLeft = e.clientX - this.box.offsetLeft;
    this.mouseTop = e.clientY - this.box.offsetTop;
  }

  @HostListener('dragend', ['$event'])
  drop(e: MouseEvent): void {
    if (e.clientX - this.mouseLeft < 0 && e.clientY - this.mouseTop < 0) {
      this.renderer2.setStyle(this.box, 'left', `0px`);
      this.renderer2.setStyle(this.box, 'top', `0px`);
      return;
    }
    if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth && e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
      this.renderer2.setStyle(this.box, 'left', `${this.body.clientWidth - 200}px`);
      this.renderer2.setStyle(this.box, 'top', `${this.body.clientHeight - 200}px`);
      return;
    }
    if (e.clientX - this.mouseLeft < 0 && e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
      this.renderer2.setStyle(this.box, 'left', `0px`);
      this.renderer2.setStyle(this.box, 'top', `${this.body.clientHeight - 200}px`);
      return;
    }
    if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth && e.clientY - this.mouseTop < 0) {
      this.renderer2.setStyle(this.box, 'left', `${this.body.clientWidth - 200}px`);
      this.renderer2.setStyle(this.box, 'top', `0px`);
      return;
    }
    if (e.clientX - this.mouseLeft < 0) {
      this.renderer2.setStyle(this.box, 'left', `0px`);
      this.renderer2.setStyle(this.box, 'top', `${e.clientY - this.mouseTop}px`);
      return;
    }
    if (e.clientY - this.mouseTop < 0) {
      this.renderer2.setStyle(this.box, 'left', `${e.clientX - this.mouseLeft}px`);
      this.renderer2.setStyle(this.box, 'top', `0px`);
      return;
    }
    if (e.clientX - this.mouseLeft + 200 > this.body.clientWidth) {
      this.renderer2.setStyle(this.box, 'left', `${this.body.clientWidth - 200}px`);
      this.renderer2.setStyle(this.box, 'top', `${e.clientY - this.mouseTop}px`);
      return;
    }
    if (e.clientY - this.mouseTop + 200 > this.body.clientHeight) {
      this.renderer2.setStyle(this.box, 'left', `${e.clientX - this.mouseLeft}px`);
      this.renderer2.setStyle(this.box, 'top', `${this.body.clientHeight - 200}px`);
      return;
    }
    this.renderer2.setStyle(this.box, 'left', `${e.clientX - this.mouseLeft}px`);
    this.renderer2.setStyle(this.box, 'top', `${e.clientY - this.mouseTop}px`);
  }
}
