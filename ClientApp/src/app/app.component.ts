import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService,
  ) {
  }
  customEvent() {

    // push GTM data layer with a custom event
    const gtmTag = {
      event: 'button-click',
      data: 'my-custom-event',
    };
    this.gtmService.pushTag(gtmTag);

    alert('this is a custom event');
  }
  ngOnInit() {
    // push GTM data layer for every visited page
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'dddfdff',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
