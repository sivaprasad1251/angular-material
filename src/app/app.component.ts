import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';
  notifications=5;
  notify=0;
  showSpinner=false;

  opened=false;
  userName="siva";

loadData() {
  this.showSpinner=true;

  setTimeout(() => {
    this.showSpinner=false;
  },5000);
}






}
