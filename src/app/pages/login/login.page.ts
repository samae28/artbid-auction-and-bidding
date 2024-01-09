import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  type: boolean = true;
  isLogin = false;

  constructor(private global: GlobalService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // this.isLoggedIn();
  }

  async isLoggedIn(){
    try {
      this.global.showLoader();
      const val = await this.authService.getId();
      console.log(val);
      if(val) this.navigate();
      this.global.hideLoader();
    } catch (e) {
      console.log(e);
      this.global.hideLoader();
    }
  }

  // async isLoggedIn() {
  //   try {
  //     this.global.showLoader();
  //     const val = await this.authService.getId();
  //     console.log(val);
  //     if (val) {
  //       this.navigate();
  //     }
  //     this.global.hideLoader();
  //   } catch (e) {
  //     console.log(e);
  //     this.global.hideLoader();
  //   }
  // }

  changeType() {
    this.type = !this.type;
  }

  onSubmit(form: NgForm): void{
    console.log(form);
    if(!form.valid) return;
    this.login(form);
  }

  login(form) {
    this.isLogin = true;
    this.authService.login(form.value.email, form.value.password).then(data => {
      console.log(data);
      this.navigate();
      this.isLogin = false;
      form.reset();
    })
    .catch(e => {
      console.log(e);
      this.isLogin = false;
    })
  }

  navigate() {
    this.router.navigateByUrl('/tabs');
  }

}
