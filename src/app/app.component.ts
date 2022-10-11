import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { emailVerification } from './app.regex';
// import { findIndex } from 'rxjs';
import { ApiServices } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {

  // enmail: emailVerification;
  formGroup: FormGroup;
  
  constructor(private http: HttpClient, private formBuilder: FormBuilder, 
              // private enmail: emailVerification
              private ApiServices: ApiServices,
              ) {}

 username: string;
 password: string;
 usersComments;
 checkbox: Array<[]> = [];
 tet:string 

  ngOnInit(){
    this.checkingFormValidations()
    this.displayingUsersComments()
    
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
    if(postMethodData.username && postMethodData.password) {
    this.http.post<PostDetailsFormat>('https://tharakapi.free.beeceptor.com/login',{
      username: postMethodData.username,
      password: postMethodData.password,
    }).subscribe(resp => {
      console.log(resp.status)
    })
  }
    postMethodData.username='';
    postMethodData.password='';
  }
  
  displayingUsersComments(){
    this.ApiServices.getData().subscribe((response)=>{
      console.log(response)
      this.usersComments = response
    })

  //  this.http.get<any>('https://jsonplaceholder.typicode.com/posts/1/comments',).subscribe((resp)=>
  //  { 
  //   console.log(resp)
  //   this.usersComments=resp
  //  })
   console.log("the data from get apii is...", this.usersComments)
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
