import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  city:String;
  street:String;
  number:Number;
  MaxWeight:Number;
  MaxHeight:Number;
  Category:String;
  OpenHours:String;
  option1:Boolean;
  option2:Boolean;
  option3:Boolean;
  option4:Boolean;

  constructor(
    private validateService: ValidateService,
     private flashMessage:FlashMessagesService,
     private authService:AuthService,
    private router: Router
    ) { }



  
  

  ngOnInit() {
  }


  
  onRequestSubmit(){
    const detail={
      city: this.city,
      street: this.street,
      number: this.number,
      MaxWeight:this.MaxWeight,
      MaxHeight:this.MaxHeight,
      Category:this.Category,
      OpenHours:this.OpenHours,
      option1:this.option1,
      option2:this.option2,
      option3:this.option3,
      option4:this.option4,
    
     
    }
    
    ///Required Fields
    if(!this.validateService. validateDetail(detail)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
  }
  this.authService. getDetails(detail).subscribe(data =>{
    if(data.success){
      this.flashMessage.show('You have sent requst', {cssClass: 'alert-success', timeout: 3000});
     
    }else {
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/details']);
    }
  })
}

}
