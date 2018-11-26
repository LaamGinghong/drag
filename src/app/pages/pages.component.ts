import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  buttonType = {
    draggable: 'primary',
    mouse: 'default'
  };

  constructor(
    private route: Router
  ) {
  }

  ngOnInit() {
    const url = this.route.url.split('/')[2];
    for (const i in this.buttonType) {
      if (this.buttonType.hasOwnProperty(i)) {
        this.buttonType[i] = i === url ? 'primary' : 'default';
      }
    }
  }

  changeRoute(route: string): void {
    for (const i in this.buttonType) {
      if (this.buttonType.hasOwnProperty(i)) {
        this.buttonType[i] = i === route ? 'primary' : 'default';
      }
    }
  }
}
