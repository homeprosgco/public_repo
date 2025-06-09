import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { dashboardRoute } from 'src/app/app-routing.module';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  sub: Subscription | null = null;
  showServerError: boolean = false;

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.authSvc.authForm;
  }

  get email() {
    return this.authSvc.email;
  }

  get password() {
    return this.authSvc.password;
  }

  get confirmPassword() {
    return this.authSvc.confirmPassword;
  }

  get isSubmitted() {
    return this.authSvc.isSubmitted;
  }

  get serverErrorMsg() {
    return this.authSvc.serverErrorMsg;
  }

  ngAfterViewInit() {
    NioApp.coms.docReady.forEach((f: any) => f());
  }

  onSubmit() {
    this.showServerError = false;
    const next = this.authSvc.registerUser();
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
    console.log('Destroying RegisterComponent');
  }

}