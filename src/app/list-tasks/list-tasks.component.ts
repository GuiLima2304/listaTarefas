import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  @Input () public listtasks;
  public array = [];

  constructor() { }

  ngOnInit() {
  }

}
