import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y';

  @ViewChild('mainContent',{read:ElementRef}) mainElement!: ElementRef<HTMLElement>;

  focusMainElement()
  {
    this.mainElement.nativeElement.focus();
  }
}
