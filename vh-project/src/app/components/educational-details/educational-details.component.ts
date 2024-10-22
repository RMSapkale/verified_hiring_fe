
import { Component, NgModule } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  year: number;
}

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']

})

export class EducationalDetailsComponent {
  educationList: Education[] = []; 
  newEducation: Education = { degree: '', institution: '', year: new Date().getFullYear() }; 

  
  addEducation() {
    
    if (this.newEducation.degree && this.newEducation.institution && this.newEducation.year) {
      this.educationList.push({ ...this.newEducation }); 
      this.newEducation = { degree: '', institution: '', year: new Date().getFullYear() }; 
    } else {
      
      alert('Please fill in all fields.');
    }
  }
}

