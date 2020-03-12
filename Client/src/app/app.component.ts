import { Component ,OnInit} from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'material-demo';
  
  news:any = [];

  get sortData() {
    return this.news.sort((a, b) => {
      return <any>new Date(b.created_at) - <any>new Date(a.created_at);
    });
  }

  constructor(public rest:RestService) { }

  ngOnInit() {
    this.getallNews();
  }

  getallNews() {
    this.news = [];
    this.rest.getallNews().subscribe((data: {}) => {
      console.log(data);
      this.news = data;
    });
  }


  delete(id) {
    this.rest.deleteNews(id)
      .subscribe(res => {
          this.getallNews();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
