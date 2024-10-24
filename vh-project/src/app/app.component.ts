import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  educationForm: FormGroup;

  constructor(private fb: FormBuilder) {
   
    this.educationForm = this.fb.group({
      education: ['', Validators.required],
      country: ['', Validators.required],
      universityOrBoard: ['', Validators.required],
      educationSystem: ['', Validators.required],
      instituteName: ['', Validators.required],
      percentageOrCgpa: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
      courseType: ['', Validators.required],
      documents: [null, Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

 
  onSubmit() {
    if (this.educationForm.valid) {
      console.log('Form Submitted!', this.educationForm.value);
      this.educationForm.reset();
    } else {
      console.log('Form is invalid!');
      this.educationForm.markAllAsTouched();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.educationForm.patchValue({
        documents: file
      });
    }
  }
}
