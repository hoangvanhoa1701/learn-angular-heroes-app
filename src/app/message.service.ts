import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  addMassage(message: string) {
    this.messages.push(message);
  }

  clearMassage() {
    this.messages = [];
  }
}
