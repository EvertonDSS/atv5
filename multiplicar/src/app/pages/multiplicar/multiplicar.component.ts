import { Component } from '@angular/core';
import { MultiplicarService } from '../../services';

@Component({
  selector: 'app-multiplicar',
  imports: [],
  templateUrl: './multiplicar.component.html',
  styleUrl: './multiplicar.component.css'
})
export class MultiplicarComponent {
  private res: number = 0;

  constructor(private multiplicarService: MultiplicarService) { }
  multiplicarBotao(numero1: string, numero2: string) {
    let n1: number;
    let n2: number;
    n1 = parseInt(numero1);
    n2 = parseInt(numero2);

    this.res = this.multiplicarService.multiplicar(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}
