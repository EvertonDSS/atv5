import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DividirComponent } from "./pages/dividir/dividir.component";

@Component({
  selector: 'app-root',
  imports: [DividirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dividir';
}
