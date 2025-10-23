import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent {
 projects = [
    { name: 'John Doe', role: 'Graphics Designer', avatar: 'JD', status: 'Abre Pro', dueDate: 'Jun, 26', priority: 'High', priorityClass: 'high' },
    { name: 'Jenifer Vintage', role: 'Web Designer', avatar: 'JV', status: 'Mailable', dueDate: 'March, 31', priority: 'Low', priorityClass: 'low' },
    { name: 'William Jem', role: 'Developer', avatar: 'WJ', status: 'Atable', dueDate: 'Aug, 02', priority: 'Medium', priorityClass: 'medium' },
    { name: 'David Jones', role: 'Developer', avatar: 'DJ', status: 'Guruable', dueDate: 'Sep, 22', priority: 'High', priorityClass: 'high' }
  ];

  constructor() { }
}
