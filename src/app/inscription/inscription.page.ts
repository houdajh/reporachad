import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,Validators, FormBuilder, FormGroup} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Compte } from '../Compte';
import { ContactAccessService } from '../services/contact-access.service';
import { ContactAuthService } from '../services/contact-auth.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  private inscriptionForm : FormGroup;
  protected compte:Compte;

  constructor(private fireauth :ContactAuthService, 
    private firestore: ContactAccessService, 
    private formBuilder: FormBuilder,
  private navCtrl: NavController) {
  this.inscriptionForm = this.formBuilder.group({
  email: [''],
  password: [''],
  tel: [''],
  nom: [''],
  prenom: [''],
  });
  }
  ngOnInit() {}
  singUp() {
  this.fireauth.singUp(this.inscriptionForm.value)
  .then(res => {
  console.log(res);
 // this.firestore.newCompte((this.inscriptionForm.value)) 
  this.navCtrl.navigateForward('/authentification');
  }, err => {
  console.log(err);
  })
  }
  }
