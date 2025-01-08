import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  inscroll: boolean = false;
  @HostListener('window:scroll', [])
  change(): void {
    this.inscroll = window.scrollY > 10;
  }
}
