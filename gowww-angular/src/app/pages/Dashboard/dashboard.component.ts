import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = {
    name: 'Antony'
  }
  standings = [
    {
      id: 0,
      name: 'Premier League',
    },
    {
      id: 1,
      name: 'UEFA Champions League',
    },
  ]
  selectedStandings = 0
}
