
import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h1>numero: {{counter}}</h1>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent{
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }
}
