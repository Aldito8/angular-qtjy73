import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  @Input() set student(student: Student) {
    if (student) {
      this.form.patchValue(student);
    }
  }
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public modal: NgbActiveModal
  ) {
    this.form = this.fb.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  get first () {
    return this.form.controls['age'];
  }
  get last () {
    return this.form.controls['age'];
  }
  get age () {
    return this.form.controls['age'];
  }
  get email () {
    return this.form.controls['email'];
  }
  get f(){
    return this.form.controls;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.modal.close(this.form.value);
      Swal.fire({
        text: 'data changed successfully',
        target: '#custom-target',
        customClass: {
          container: 'position-absolute'
        },
        toast: true,
        position: 'top-right'
      })
    }
  }

}
