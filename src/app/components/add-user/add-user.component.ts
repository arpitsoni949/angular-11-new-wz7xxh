import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  userDetails: User;
  submitted = false;
  basicInfoSubmitted: boolean = false;
  addressInfoSubmitted: boolean = false;
  companyInfoSubmitted: boolean = false;
  geoInfoSubmitted: boolean = false;

  userId!: string;
  isAddMode!: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private service: CommonServiceService,
    private route: ActivatedRoute
  ) {}

  currentCount: number;
  ngOnInit() {
    //count code
    this.service.getCount().subscribe((res) => {
      this.currentCount = res.value;
    });

    this.userId = this.route.snapshot.params['id'];
    //alert(this.userId);
    this.isAddMode = !this.userId;

    this.userForm = new FormGroup({
      basicInfo: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(2),
        ]),
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required, Validators.min(6)]),
        website: new FormControl(null, [Validators.required]),
      }),
      addressInfo: this.formBuilder.group({
        street: new FormControl(null, [Validators.required]),
        suite: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        zipcode: new FormControl(null, [Validators.required]),
      }),
      companyInfo: this.formBuilder.group({
        name: new FormControl(null, [Validators.required]),
        catchPhrase: new FormControl(null, [Validators.required]),
        bs: new FormControl(null, [Validators.required]),
      }),
      geoInfo: this.formBuilder.group({
        lat: new FormControl(null, [Validators.required]),
        lng: new FormControl(null, [Validators.required]),
      }),
    });

    //using formBuilder
    // this.userForm = this.formBuilder.group({
    //   basicInfo: this.formBuilder.group({
    //     name: [this.userDetails.name, [Validators.required]],
    //     username: [null, [Validators.required]],
    //     email: [null, [Validators.required], [Validators.email]],
    //     phone: [null, [Validators.required]],
    //     website: [null, [Validators.required]],
    //   }),
    //   addressInfo: this.formBuilder.group({
    //     street: ['', Validators.required],
    //     suite: ['', Validators.required],
    //     city: ['', Validators.required],
    //     zipcode: ['', Validators.required],
    //   }),
    //   companyInfo: this.formBuilder.group({
    //     name: ['', Validators.required],
    //     catchPhrase: ['', Validators.required],
    //     bs: ['', Validators.required],
    //   }),
    //   geoInfo: this.formBuilder.group({
    //     lat: ['', Validators.required],
    //     lng: ['', Validators.required],
    //   }),
    // });

    // }

    this.getUserDetails(this.userId);

    console.log('controls: ' + this.userForm.controls.basicInfo);
  }

  get f() {
    return (<FormGroup>this.userForm.get('basicInfo')).controls;
  }
  get fa() {
    return (<FormGroup>this.userForm.get('addressInfo')).controls;
  }
  get fc() {
    return (<FormGroup>this.userForm.get('companyInfo')).controls;
  }
  get fg() {
    return (<FormGroup>this.userForm.get('geoInfo')).controls;
  }
  get basicInfo() {
    return this.userForm.get('basicInfo');
  }
  get addressInfo() {
    return this.userForm.get('addressInfo');
  }
  get companyInfo() {
    return this.userForm.get('companyInfo');
  }
  get geoInfo() {
    return this.userForm.get('geoInfo');
  }

  saveUserDetails() {
    //this.submitted = true;
    this.basicInfoSubmitted = true;
    this.addressInfoSubmitted = true;
    this.companyInfoSubmitted = true;
    this.geoInfoSubmitted = true;

    //alert(JSON.stringify(this.userForm.value));
    if (this.userForm.invalid) {
      //alert('Please fill all the details');
      return;
    }
    alert(JSON.stringify(this.userForm.value));
    this.service.create(this.userForm.value).subscribe(
      (response) => {
        console.log(response);
        alert('Details saved successfully');
      },
      (error) => {
        alert('error: ' + error);
      }
    );
  }

  onReset() {
    //this.submitted = false;
    this.userForm.reset();
  }

  getUserDetails(id: string) {
    this.service.get(id).subscribe(
      (data) => {
        this.userDetails = data;
        console.log('getUserDetails: ' + this.userDetails);
        //alert('data:' + this.userDetails);
        this.userForm.patchValue({
          basicInfo: {
            name: this.userDetails.name,
            username: this.userDetails.username,
            email: this.userDetails.email,
            phone: this.userDetails.phone,
            website: this.userDetails.website,
          },
          addressInfo: {
            street: this.userDetails.address.street,
            suite: this.userDetails.address.suite,
            city: this.userDetails.address.city,
            zipcode: this.userDetails.address.zipcode,
          },
          companyInfo: {
            name: this.userDetails.company.name,
            catchPhrase: this.userDetails.company.catchPhrase,
            bs: this.userDetails.company.bs,
          },
          geoInfo: {
            lat: this.userDetails.address.geo.lat,
            lng: this.userDetails.address.geo.lng,
          },
        });
        //this.userForm.controls.basicInfo.get('name').setValue('arpit');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  increment(): void {
    this.service.setCount(this.currentCount, 1);
  }

  decrement(): void {
    this.service.setCount(this.currentCount, -1);
  }
}
