import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Reply} from './reply';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  answerBearUrl = 'https://answer-bear.herokuapp.com';

  comment = new FormControl('');
  reply = new FormControl('');

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  showReply() {
    this.http.post<Reply>(this.answerBearUrl, {
      comment: this.comment.value
    }).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
        this.reply.setValue(val.reply);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });

    // subscribe((data: Reply) => this.reply.setValue(data.reply));
  }
}
