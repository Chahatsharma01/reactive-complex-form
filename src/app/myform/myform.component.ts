import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],

})

export class MyformComponent implements OnInit {
 myForm!: FormGroup

 constructor(){}

 ngOnInit() {
this.formLogin();
}

formLogin(){
  this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),


    skills: new FormArray([]),
    education: new FormArray([]),
    certificate:new FormArray([])

  });

  // this.addSkill()
}



get skillsArray() {
  return this.myForm.get('skills') as FormArray;
}
get educationArray() {
  return this.myForm.get('education') as FormArray;
}

get certificateArray() {
  return this.myForm.get('certificate') as FormArray;
}
addSkill() {
  this.skillsArray.push(new FormGroup({
    name: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required)
  }));
}
addEducation() {
  this.educationArray.push(new FormGroup({
    name: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required)
  }));
}
addCertificate() {
  this.certificateArray.push(new FormGroup({
    name: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required)
  }));
}

// removeSkill(index: number) {
//   this.skillsArray.removeAt(index);
// }

onSubmit() {
  console.log(this.myForm.value);
}
}















