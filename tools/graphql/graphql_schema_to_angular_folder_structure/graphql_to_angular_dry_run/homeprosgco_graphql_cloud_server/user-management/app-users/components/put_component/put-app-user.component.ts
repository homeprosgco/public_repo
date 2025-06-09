
    import { Component } from "@angular/core";
    import { CommonModule } from '@angular/common';
    import { MutationResult } from "apollo-angular";
    import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
    import { ReactiveFormsModule } from '@angular/forms';
    import { trigger, transition, style, animate } from '@angular/animations';
    import { InputTextModule } from 'primeng/inputtext';
    import { DropdownModule } from 'primeng/dropdown';
    import { ButtonModule } from 'primeng/button';
    import * as EnumValues from '../../../../enums';
    import { PutAppUserResponse } from '../../interface/app-user-response.interface';
    import { PutAppUserGQL } from '../../services';
    
    import {
    Observable,
    Subject,
    catchError,
    of,
    startWith,
    switchMap,
    tap,
    } from 'rxjs';
    import {
    DynamicTemplateLoaderComponent,
    UXService,
    } from '@homeprosg-co/ui-base';
    

    @Component({
        selector: 'sg-put-app-user',
        imports: [
            CommonModule, 
            ReactiveFormsModule, 
            InputTextModule, 
            DropdownModule,
            ButtonModule, 
            DynamicTemplateLoaderComponent,
        ],
        standalone: true,
        templateUrl: './put-app-user.component.html',
        animations: [
        trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('400ms ease-in', style({ opacity: 1 })),
        ]),
        transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
        ]),
    ],
    })
    export class PutAppUserComponent {
        // Convert form submission to an observable for dynamic UI handling
        appUserForm$!: Observable<MutationResult<PutAppUserResponse> | null>;
        appUserForm: FormGroup;
        retrySubject = new Subject<void>();
        

        constructor(
            private fb: FormBuilder, 
            
            private putGQL: PutAppUserGQL,
            
            private uxService: UXService
        ) {
            this.appUserForm = this.fb.group({  name: new FormControl('', Validators.required), 
 email: new FormControl('', [Validators.required, Validators.email]),
phoneNumber: new FormControl('', Validators.required), 
  address: new FormControl('', Validators.required), 
 profilePictureUrl: new FormControl([]),
  lastLogin: new FormControl('', Validators.required),});

            

            // Convert form submission into an observable (Handles success & error)
            this.appUserForm$ = this.retrySubject.pipe(
                startWith(null),
                switchMap(() =>
                    this.putGQL.mutate({ input: this.appUserForm.value }).pipe(
                    tap(() => {
                        this.uxService.showSuccessMessage(
                        'AppUser created successfully!',
                        '/sg-put-app-user'
                        );
                    }),
                    catchError((error) => {
                        console.error('Error creating AppUser:', error);
                        this.uxService.showErrorMessage(
                        'Failed to create AppUser. Please try again.',
                        );
                        return of(null); // Emit null to indicate an error
                    }),
                )
            )
        );
        }

    
        submit() {
            if (this.appUserForm.valid) {
            this.retrySubject.next(); // Trigger mutation through retrySubject
            }
        }

        retry() {
            this.retrySubject.next(); // Retry mutation
        }
        
        getEnumOptions(enumName: keyof typeof EnumValues): Array<{ label: string; value: string }> {
          const values = EnumValues[enumName as keyof typeof EnumValues];
          if (!values) return [];
          return Object.values(values).map((v) => ({
            label: v as string,
            value: v as string,
          }));
        }
    }
    