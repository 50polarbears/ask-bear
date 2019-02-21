import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Comment} from './comment';
import {HttpClient} from '@angular/common/http';

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
    this.http.post(this.answerBearUrl, this.comment.value).subscribe((data: Comment) => this.reply.setValue(data.reply));
  }
}
