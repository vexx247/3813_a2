import { Component, OnInit } from '@angular/core';
import {Message} from '../entity';
import {SocketsService} from '../sockets.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  messages:Message[] = [];
  ioConnection:any;
  messagetext:string = "";
  constructor(private socketservice:SocketsService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.length == 0){
      this.router.navigateByUrl('/login');
    }

    this.socketservice.initSocket();
    this.ioConnection = this.socketservice.onMessage()
      .subscribe((message:Message[]) => {
        
        this.messages = message;
        console.log(this.messages);
      });
      this.socketservice.chat(null);
  }

 chat(){
    
    if(this.messagetext){
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.socketservice.chat(new Message(this.messagetext , time));
      this.messagetext=null;
    }else{
      console.log("no message");
    }
  }

}
