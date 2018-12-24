import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRPG';

  arrayOfThings: string[] = [
    "Str 1",
    "Str 2",
    "Str 3"
  ]

  onClick(sentence: string){
    console.log(`You clicked ${sentence}!`)
  }
}
