import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth} from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  login(email: String, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((userData: unknown) => resolve(userData),//infference
          (          err: any) => reject(err))// inference
    });

  }
}
