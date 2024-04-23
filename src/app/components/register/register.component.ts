import {CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit{
  userRegisterForm:FormGroup;
  
  constructor(){
    this.userRegisterForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\s]{3,15}$')]),
      email: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      password: new FormControl('',[Validators.required,Validators.pattern('^[1-9a-zA-Z\s]{5,15}$')]),
      address:new FormGroup({
        city:new FormControl(""),
        street:new FormControl("")
      }),
      phoneNums:new FormArray([new FormControl('')])

    }
    )
   // console.log(this.userRegisterForm)
  }
  ngOnInit(): void {
  //  this.userRegisterForm.setValue({
  //   name:"angelo",
  //   email:"angelo@gmail.com",
  //   password: "password1234" ,
  //    address:{city : "Torino",street : "Via Roma"}
  //  })


  //  this.userRegisterForm.patchValue({
  //   name:"angelo",
  //   email:"angelo@gmail.com",
  //   // password: "password1234" ,
  //    address:{city : "Torino",street : "Via Roma"},
     
  //  })
  }

  register(){
    showAlert()
    //console.log(this.userRegisterForm.value)
  }

  get phones(){
    return this.userRegisterForm.get('phoneNums') as FormArray
  }

  addPhone(){
    this.phones.push(new FormControl(''))
  }
  // removePhone(){
  //   this.phones.removeAt(this.phones.length-1)
  // }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }
  
}

function showAlert() {
  Swal.fire({
      title: 'Done!',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
}
