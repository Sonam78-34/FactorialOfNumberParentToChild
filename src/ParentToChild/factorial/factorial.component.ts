import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent 
{
  @Input() receiveFactorial:number|undefined;
 
}
