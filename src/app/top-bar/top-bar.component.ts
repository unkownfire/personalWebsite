import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  hero = "Windstorm";
  constructor() { }

  ngOnInit(): void {
  }

}
