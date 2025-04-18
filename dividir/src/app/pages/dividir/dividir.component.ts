import { Component } from '@angular/core';
import { DividirService } from '../../services';

@Component({
  selector: 'app-dividir',
  imports: [],
  templateUrl: './dividir.component.html',
  styleUrl: './dividir.component.css'
})
export class DividirComponent {
  private res: number = 0;

  constructor(private dividirService: DividirService) { }
  dividirBotao(num1: string, num2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(num1);
    n2 = parseFloat(num2);
    this.res = this.dividirService.dividir(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}

