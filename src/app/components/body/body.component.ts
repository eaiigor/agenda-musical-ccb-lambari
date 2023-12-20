import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

  getBodyClass(): string {
    return '';
  }
}
