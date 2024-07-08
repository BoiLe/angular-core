import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'sara-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sara.component.html',
  styleUrl: './sara.component.scss'
})
export class AppComponent {
  title = 'angular-core';
}
