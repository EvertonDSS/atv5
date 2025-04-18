import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiplicarComponent } from "./pages/multiplicar/multiplicar.component";

@Component({
  selector: 'app-root',
  imports: [MultiplicarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiplicar';
}
