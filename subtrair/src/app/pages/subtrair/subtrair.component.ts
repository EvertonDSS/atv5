import { Component } from '@angular/core';
import { SubtrairService } from '../../services';

@Component({
  selector: 'app-subtrair',
  imports: [],
  templateUrl: './subtrair.component.html',
  styleUrl: './subtrair.component.css'
})
export class SubtrairComponent {
  private res: number = 0;

  constructor(private subtrairService: SubtrairService) { }

  subtrairBotao(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.subtrairService.subtrair(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }
}
