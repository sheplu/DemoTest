import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { DetailsPage } from '../details/details';
import { GithubUsers } from '../../providers/githubuser';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  
  users: User[];
    
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private githubUsers: GithubUsers) {
      githubUsers.load().subscribe(users => {
          console.log(users);
          this.users = users;
      })
  }
    
    goToDetails(login: string) {
        this.navCtrl.push(DetailsPage, {login})
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
