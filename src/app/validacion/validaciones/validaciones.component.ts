import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validaciones',
  templateUrl: './validaciones.component.html',
  styles: [
  ]
})
export class ValidacionesComponent implements OnInit {

  form: FormGroup;
  errorAge: string[] = [];

  constructor( private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(65)])
  
    });
   }

   ngOnInit(): void {

    this.form.valueChanges.subscribe(dt => {
      this.errorAge = this.validarEdad();
    })
     
   }
   
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

  validarEdad(): string[] {
    const control = this.form.get('age')?.errors;
    const error: string[] = [];
    if (control?.['required']) {

      error.push('Age is required.');

    }
    if (control?.['min']) {

      error.push('The minimum age must be 18.');

    }
    if (control?.['max']) {

      error.push('The maximum age should be 65.');

    }
    return error;
  }
}
