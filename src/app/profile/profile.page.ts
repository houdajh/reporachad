import { Component, OnInit } from '@angular/core';
import { Compte } from '../Compte';
import { ContactAccessService } from '../services/contact-access.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image: String; 

  compte: any={};

  constructor(private contactservice:ContactAccessService) { 

}

  ngOnInit() {
    console.log(  this.contactservice.getCompte('vP2reyHF0LWrAFqYoHPh').subscribe(res => {
      this.compte=<Compte>res ;
      console.log(res);
      }))
  }

}
