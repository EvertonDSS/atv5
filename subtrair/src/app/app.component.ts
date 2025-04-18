import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubtrairComponent } from "./pages/subtrair/subtrair.component";

@Component({
  selector: 'app-root',
  imports: [SubtrairComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'subtrair';
}
