import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  focusToMainContent()
  {
    let element = document.getElementById('main-content')
    element?.setAttribute('tabindex','-1') // You can set tabindex in HTML too than in JS
    element?.focus()
    
  }
}
