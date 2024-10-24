import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {
  educationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Define the form structure with default values and validation rules
    this.educationForm = this.fb.group({
      education: ['', Validators.required],
      country: ['', Validators.required],
      universityBoard: ['', Validators.required],
      educationSystem: ['', Validators.required],
      instituteName: ['', Validators.required],
      percentage: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      courseType: ['', Validators.required],
      documents: [null],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // Check if the form is valid before submitting
    if (this.educationForm.valid) {
      console.log('Form Submitted:', this.educationForm.value);
      // Perform actions like sending the data to a server
    } else {
      console.log('Form is invalid');
    }
  }

  // Function to handle file input
  onFileChange(event: any): void {
    const file = event.target.files;
    this.educationForm.patchValue({ documents: file });
  }
}
