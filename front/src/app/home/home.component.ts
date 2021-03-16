import { Component, OnInit } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  application: Application = {
    id: 'roman_golovakha',
    name: 'Roman Golovakha'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
