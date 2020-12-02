import { Component, OnInit } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 


  public toolbarToggleValue;
  public hideUsers = true;
  public hideChat = true;

  constructor(private http: HttpClient, private router: Router) { }

  goToLobby(): String { 

    //generate code: Move to server 
    //from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "code": result
      }
    };
    this.router.navigate(['/lobby'], navigationExtras);

    return result;
  }


  onToggleChange(event) {
    if (event === "users") {
      console.log("Toggling users");
      this.hideUsers = !this.hideUsers;
    }
    if (event === "chat") {
      console.log("Toggling chat");
      this.hideChat = !this.hideChat;
    }
  }
  ngOnInit(): void {
    console.log('here');
  }

}