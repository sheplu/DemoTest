import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsers } from '../../providers/githubuser';

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  login: string;
  user: User;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
      this.login = navParams.get('login');
      githubUsers.loadDetails(this.login).subscribe(user => {
          this.user = user;
          console.log(user);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
