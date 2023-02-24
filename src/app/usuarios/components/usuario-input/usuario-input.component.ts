import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-input',
  templateUrl: './usuario-input.component.html',
  styles: [
  ]
})
export class UsuarioInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  debounce: Subject<string> = new Subject();
  
  termino: string = "";

  ngOnInit() {
    this.debounce
      .pipe(
        debounceTime(300))
      .subscribe( valor => {
       this.onDebounce.emit( valor );
    });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    
    this.debounce.next( this.termino );
  }

}
