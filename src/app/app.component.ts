import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-task1';
  
  ngOnInit():void{ }
  
  list=[
    {name: 'First Child'},{name: 'Second Child'},{name: 'Third Child'},{name: 'Fourth Child'},{name:'Fifth Child'},{name:'Sixth Child'}
  ];
}
