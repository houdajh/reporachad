import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ContactAuthService {

  constructor(private fireauth: AngularFireAuth) { }

  singUp(value)
  {
  return new Promise<any>((resolve, reject) => {
  this.fireauth.createUserWithEmailAndPassword(value.email,value.password)
  .then(
  res => resolve(res),
  err => reject(err))
  })
  }
}