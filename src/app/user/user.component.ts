import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from '../models/interfaces/IPost';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  posts: IPost[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getData()
      .subscribe(data => {
        this.posts = data;
      });
  }

  ngOnInit(): void {
  }

}
