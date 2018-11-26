import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit {
  @ViewChild('box') box: ElementRef;
  dragging = false;
  mouseLeft: number;
  mouseTop: number;

  constructor(
    private renderer2: Renderer2
  ) {
  }

  ngOnInit() {
  }

  drag(e: MouseEvent): void {
    if (e.target === this.box.nativeElement) {
      this.dragging = true;
      this.mouseLeft = e.clientX - this.box.nativeElement.offsetLeft;
      this.mouseTop = e.clientY - this.box.nativeElement.offsetTop;
    }
  }

  drop(): void {
    this.dragging = false;
  }

  move(e: MouseEvent): void {
    if (this.dragging) {
      this.renderer2.setStyle(this.box.nativeElement, 'left', `${e.clientX - this.mouseLeft}px`);
      this.renderer2.setStyle(this.box.nativeElement, 'top', `${e.clientY - this.mouseTop}px`);
    }
  }
}
