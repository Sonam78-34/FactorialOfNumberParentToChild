import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'FactorialParentToChild';

  factorialOfNumber(numberOne: number): number 
  {
    if (numberOne === 0)
     {
      return 1;
    }
    else 
    {
      return numberOne * this.factorialOfNumber(numberOne - 1);
    }
  }
}
