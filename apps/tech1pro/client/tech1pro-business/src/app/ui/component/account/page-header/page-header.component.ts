import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UIService } from 'src/app/ui/_ui-service/ui-service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  constructor(
    private uiSvc: UIService,
    private router: Router
  ) { }

  onSignOut() {
    this.uiSvc.signOut();
    this.router.navigateByUrl('signin', { replaceUrl: true })
  }

}
