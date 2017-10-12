import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/Models';
import firebase from  'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  user = {} as User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.user.email = 'anusondd@gmail.com';
    this.user.password = '21519097';
  }

  async login(user: User){
    
        try {
          const result = firebase.auth().signInWithEmailAndPassword(user.email,user.password);
          console.log(result);
          if(result){
            this.navCtrl.push('HomePage');
          }
        } catch (error) {
          console.error(error);
        }
        
    
      }
    
      register(){
    
        this.navCtrl.push('RegisterPage');
      }
      ForgotPassword(){    
        this.navCtrl.push('ResetPasswordPage');
      }

}
