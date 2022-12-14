import { Component } from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { emailVerification } from './app.regex';
// import { findIndex } from 'rxjs';
import { ApiServices } from './app.service';
import {Logger} from './app.logger';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [Logger]
})


export class AppComponent  {

  // enmail: emailVerification;
  formGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
              // private enmail: emailVerification
              private ApiServices: ApiServices,
              private logger: Logger,
              ) {}

 username: string;
 password: string;
 usersComments;
 checkbox: Array<[]> = [];
 tet:string 
 covidReport: any;

  ngOnInit(){
    this.checkingFormValidations()
    this.displayingUsersComments()
    this.covidDataDisplay()
  }

  checkingFormValidations() {
    this.formGroup = this.formBuilder.group<any>({
      username: ['', [Validators.required, 
                      Validators.minLength(6), 
                      // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                      // this.emailverify.gg(fnInstance.value)
                      this.emailVerification]
                  ],
      password: ['', [Validators.required,
                      Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')]
                  ],
    });
  }


  emailVerification (fnInstance) {
    let checkingPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    return checkingPattern.test(fnInstance.value) ? null : {mailvalidation: true}
  }

  login(postMethodData){
    let user_login_details = {
      username: postMethodData.username,
      password: postMethodData.password
    }
    if(postMethodData.username && postMethodData.password) {
    this.ApiServices.postData(user_login_details).subscribe((response)=>console.log(response.status))
    this.logger.log('Logged in Successfully')
  }
    postMethodData.username='';
    postMethodData.password='';
  }
  
  displayingUsersComments(){
    this.ApiServices.getData().subscribe((response)=>{
      console.log(response)
      this.usersComments = response
    })
  }

  covidDataDisplay() {
    this.ApiServices.covidData().subscribe((response)=>{
      console.log(response)
      this.covidReport = response
    })
  }
  

  deleteComment(item){
    for(let i of this.usersComments){
      if(item==i.id){
        this.usersComments.splice(this.usersComments.indexOf(i), 1)
      }
    }
  }

  checkBoxItems(item){
    this.checkbox.push(item) 
  }

  deleteAllCheckBoxes(){
    for (let i of this.checkbox){
      for (let j of this.usersComments) {
        i['id'] == j.id 
          ? this.usersComments.splice(this.usersComments.indexOf(j),1)
          : console.log()
      }    
    }
  }

}

  
 
interface PostDetailsFormat {
  username: string
  password: string 
  status: string | number 
}

// interface ValidatorsFormat { () => {
//   username: [],
//   password: []
//   } 
// }
