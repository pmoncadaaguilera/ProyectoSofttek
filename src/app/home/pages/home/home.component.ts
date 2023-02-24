import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  fecha: number = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
