import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  emojis: Array<{ text: string; icon: string }> = [
    { text: 'normal', icon: '😀' },
    { text: 'risas', icon: '😂' },
    { text: 'lol', icon: '🤣' },
    { text: 'smile', icon: '😃' },
    { text: 'putada', icon: '😅' },
    { text: 'blink', icon: '😉' },
    { text: 'happy', icon: '😊' },
  ];
  showDiv: boolean = false;
  text: string = '';
  handleClick() {
    this.showDiv = !this.showDiv;
  }
  updateText(ev) {
    this.text = ev.target.value;
  }
}
