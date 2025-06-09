import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-note',
  template: `
  <div class="form-note-s2 text-center pt-4"> {{ plainText }} 
    <a routerLink="{{ routerLink }}" href="#">
      <strong>{{ strongText }}</strong>
    </a>
  </div>
  `,
  styles: [`strong { font-weight: 400 }`]
})
export class FormNoteComponent {

  @Input() plainText: string = '';
  @Input() strongText: string = '';
  @Input() routerLink: string = '';

}
