import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  img1: string = '/poert1.png';
  img2: string = '/port2.png';
  img3: string = '/port3.png';
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  test1(): void {
    this.show1 = true;
  }
  test2(): void {
    this.show2 = true;
  }
  test3(): void {
    this.show3 = true;
  }

  hidelightBox() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
  }
  box() {
    this.show1 = true;
    this.show2 = true;
    this.show3 = true;
  }
}
