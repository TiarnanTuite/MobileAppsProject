import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{

  //declaring input types
  @Input() formControlName: any;
  @Input() type: String;
  @Input() placeholder: String;

  constructor() { }

 ngOnInit(){
   
 }

}
