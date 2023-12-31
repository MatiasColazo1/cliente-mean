import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }


  constructor (private authSerice: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }

  signUp(){
    this.authSerice.signUp(this.user)
    .subscribe(
      (res: any)  => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/private']);
      },
      err => console.log(err)
    )
  }
}
