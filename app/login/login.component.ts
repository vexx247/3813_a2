import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router"
import {trigger,state,style,animate,transition } from '@angular/animations';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    trigger('iderrorState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),


    ]),
    trigger('noticeState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),


    ])
  ]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  noticeshow:boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  get noticeName(){
    return this.noticeshow ? 'show':'hide';
  }

  itemClicked(){

    this.username = this.username.trim();
    this.password = this.password.trim();
    if (!this.username) { return; }

    this.userService.checkUser(this.username, this.password).subscribe(
      (data) =>{
        console.log(data);
        this.noticeshow = true;
        if (data[0] != null) {
         sessionStorage.setItem('user', JSON.stringify(data[0]));
        }
        if (data[0].ofGroupAdminsRole) {
          this.router.navigate(['/groups']);
        } else {
          this.router.navigate(['/userdetail', data[0].username]);
        }
    }

    //   user => {
    //   if (user != null) {
    //     sessionStorage.setItem('user', JSON.stringify(user));

    //     if(user.ofGroupAdminsRole){
    //         this.router.navigate(['/groups']);
    //     } 
    //     else{
    //       this.router.navigate(['/userdetail', user.username]);
    //     }
    //   }
    //   else{
    //     console.log("Worng user"); //todo
    //   }
    // });
    );
  }

}
