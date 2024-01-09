import { GlobalService } from './../../../services/global/global.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  isLoading = false;
  constructor(
    private auth: AuthService,
    private global: GlobalService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if(!form.valid) return;
    this.isLoading = true;
    this.auth.register(form.value.email).then((data) => {
      console.log(data);
      this.isLoading = false;
      this.global.successToast('Reset Password link is sent to your email address');
      this.navCtrl.back();
    })
    .catch(e => {
      console.log(e);
      this.isLoading = false;
      this.global.showAlert('Something went wrong');
    });
  }

}
