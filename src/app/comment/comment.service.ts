import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from './comment';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class CommentService {
  answerBearUrl = 'https://answer-bear.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getReply(comment: any) {
    return this.http.post(this.answerBearUrl, comment);
  }
}
