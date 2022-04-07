import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firewall-page',
  templateUrl: './firewall-page.component.html',
  styleUrls: ['./firewall-page.component.scss']
})
export class FirewallPageComponent implements OnInit {
  isLoading = false

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('isDark')) {
      document.body.classList.remove('dark-theme')
    } else if(!localStorage.getItem('isDark')) {
      document.body.classList.toggle('dark-theme')
    }
  }

}
