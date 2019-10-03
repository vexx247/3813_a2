export class User {
    username: string;
    password: string;
    email: string;
    ofGroupAdminsRole:boolean;
    groupList:string[];
  }
  
  export class Group {
      id: number;
      name: string;
  }
  
  export class Channel {
    id: number;
    name: string;
  }
  
  export class Message {
    messagetext:string;
    messagetime:string;
    constructor(_messagetext:string,_date:string){
        this.messagetext = _messagetext;
        this.messagetime = _date;
    }
}