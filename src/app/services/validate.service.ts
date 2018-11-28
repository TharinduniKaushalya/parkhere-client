import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }


  validateRegister(user){
    if(user.name == undefined || user.email == undefined ||  user.username == undefined || user.password == undefined ){
      return false;
    }else{
      return true;
    }
  }
  
  validateDetail(detail){
    if(detail.city == undefined || detail.street == undefined ||  detail.number == undefined || detail.MaxWeight == undefined ||detail.MaxHeight == undefined||detail.category == undefined){
      return false;
    }else{
      return true;
    }
  }


  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
