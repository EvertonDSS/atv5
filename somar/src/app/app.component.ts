import { Component } from '@angular/core';
import { SomaComponent } from './pages/soma';

@Component({
  selector: 'app-root',
  imports: [ SomaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soma';
}
