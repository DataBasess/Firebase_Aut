import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../model/Models';
import firebase from  'firebase';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.user.email = 'anusondd@gmail.com';
    this.user.password = '21519097';
  }

  async register(user:User){
    try {

      const result = await  firebase.auth().createUserWithEmailAndPassword(user.email,
        user.password);
        console.log(result);
        let alert = this.alertCtrl.create({
          title: 'Register Success!',
          subTitle: 'Your need LoginPage?',
          buttons: ['OK']
        });
        alert.present();
      
    } catch (error) {
      console.error(error);
    }
    this.navCtrl.push('LoginPage');
  }

}
