import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router, private api: ApiService) {} 

  navigateTo(page: string) {
    if (page === 'student') {
    
      this.router.navigate(['/home2']);
    } else if (page === 'teacher') {
 
      this.router.navigate(['/home']);
    }
  }

  getpost(){
    this.api.getPost().subscribe((res)=>{
      console.log(res[0]);
    },(error)=>{
      console.log(error);
    });
  }

  createPost(){
    var post={
      title: 'Titulo de prueba',
      body: 'Cuerpo de prueba',
      userId: 1
    }
    this.api.createPost().subscribe((success)=>{
      console.log(success);
    },error=>{
      console.log(error);
    })
  }


}
