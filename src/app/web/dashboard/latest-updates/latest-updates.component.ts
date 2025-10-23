import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-updates',
  templateUrl: './latest-updates.component.html',
  styleUrls: ['./latest-updates.component.css']
})
export class LatestUpdatesComponent {
 updates = [
    { time: '2 hrs ago', title: '1052 Followers', description: 'You’re getting more and more followers, keep it up!', icon: 'users', iconBg: 'bg-blue' },
    { time: '4 hrs ago', title: 'New Products were added!', description: 'Congratulations!', icon: 'package', iconBg: 'bg-red' },
    { time: '1 day ago', title: '1 Friend Requests', description: 'This is great, keep it up!', icon: 'user-plus', iconBg: 'bg-green' },
    { time: '2 day ago', title: '1 Friend Requests', description: 'This is great, keep it up!', icon: 'user-plus', iconBg: 'bg-yellow' },
     { time: '4 hrs ago', title: 'New Products were added!', description: 'Congratulations!', icon: 'package', iconBg: 'bg-red' }
  ];

  constructor() { }
}
