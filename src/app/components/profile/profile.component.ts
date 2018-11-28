import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  title = 'app';
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {


    this.authService.getProfile().subscribe(profile =>{


      this.user= profile.user;

    },

    
    err=>{
      console.log(err);
      return false;
    }
    );
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
  }

}
}