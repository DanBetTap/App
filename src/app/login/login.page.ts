import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {} 

  navigateTo(page: string) {
    if (page === 'student') {
    
      this.router.navigate(['/home2']);
    } else if (page === 'teacher') {
 
      this.router.navigate(['/home']);
    }
  }
}
