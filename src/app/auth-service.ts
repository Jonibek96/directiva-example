
export class AuthService {
  isLoged = false;

  isAuth(){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
       resolve(this.isLoged);
      },1000);
    });
  }

  logIn(){
    this.isLoged = true;
  }

  logOut(){
    this.isLoged = false
  }

}
