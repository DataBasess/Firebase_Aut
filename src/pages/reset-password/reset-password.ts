import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../model/Models';
import firebase from  'firebase';


@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
    this.user.email = 'anusondd@gmail.com';
  }

  async ResetPassword(user : User){
    try {      
            const result = await  firebase.auth().sendPasswordResetEmail(user.email);
            //alert('Password Reset Email Sent!');
            let alert = this.alertCtrl.create({
              title: 'Reset Password!',
              subTitle: 'Password Reset Email Sent!',
              buttons: ['OK']
            });
            alert.present();
            console.log(result);
            
          } catch (error) {
            console.error(error);
          }
  }

}
