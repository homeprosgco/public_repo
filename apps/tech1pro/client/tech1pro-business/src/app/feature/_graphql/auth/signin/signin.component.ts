import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { dashboardRoute } from 'src/app/app-routing.module';
import { environment } from 'src/environments/environment';
import { AuthUserResponse } from 'src/generated/graphql';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  authForm!: FormGroup;
  sub: Subscription | null = null;
  seedSub: Subscription | null = null;
  seedTeamMemebersSub: Subscription | null = null;
  setActiveSub: Subscription | null = null;
  activeSub: Subscription | null = null;
  showServerError: boolean = false;

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authForm = this.authSvc.authForm;
  }

  get email() {
    return this.authSvc.email;
  }

  get password() {
    return this.authSvc.password;
  }

  get isSubmitted() {
    return this.authSvc.isSubmitted;
  }

  get serverErrorMsg() {
    return this.authSvc.serverErrorMsg;
  }

  ngAfterViewInit() {
    NioApp.coms.docReady.forEach((f: any) => f())
  }

  onSubmit() {
    console.log('test')
    this.showServerError = false;
    let next: Observable<any>;
    if(!environment.production) {
      console.log('dev')
      next = this.authSvc.signinWithCustomToken() as Observable<Promise<void>>;
    } else {
      console.log('prod')
      next = this.authSvc.signinUser() as Observable<AuthUserResponse>;
    }
    this.sub = next
      ? next.subscribe({
        next: _ => this.router.navigateByUrl(dashboardRoute, { replaceUrl: true }),
        error: (e) => {
          this.showServerError = true;
          console.log(e)
        }
      })
      : null;
  }

  ngOnDestroy() {
    this.sub && this.sub?.unsubscribe();
    this.seedSub && this.seedSub?.unsubscribe();
    console.log('Destroying SigninComponent');
  }

  seedAuthUsers() {
    this.authSvc.seedAuthUsers$().subscribe(res => {
      console.log(res);
    });
  }

  seedTeamMembers() {
    this.authSvc.seedTeamMembers$().subscribe(res => {
      console.log(res);
    });
  }

  setActiveAccounts() {
    this.authSvc.setActiveAccounts$().subscribe( res => {
      console.log(res);
    });
  }

  activeAccounts() {
    this.authSvc.activeAccounts$().subscribe( res => {
      console.log(res);
    })
  }

}
