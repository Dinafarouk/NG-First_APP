import { Component} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  from = new FormGroup({
    email : new formControl('' ,[Validators.required]),
    password : new FormControl('',[TextValidator.noSpaceAllowed]) ,
    age :new FormControl('', CustomValidators.range([10,20]))
  })

  get email(){
    return this.from.get('email');
  }
  get password(){
    return this.from.get('password');
  }

  get age(){
   console.log(this.from.get('age'));
    return this.from.get('age');
  }
}
