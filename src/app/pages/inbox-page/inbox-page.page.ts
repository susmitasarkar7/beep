import { Component, OnInit } from '@angular/core';
import { MESSAGE_LIST } from '../mocks/messages/messages';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.page.html',
  styleUrls: ['./inbox-page.page.scss'],
})
export class InboxPagePage implements OnInit {

  messageList = MESSAGE_LIST;

  constructor() { }

  ngOnInit() {
    console.log(this.messageList);
  }

}
