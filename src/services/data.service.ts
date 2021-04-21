import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../app/models/interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log("service is working!");
  }

  getData(){
    //un arreglo de posts
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
