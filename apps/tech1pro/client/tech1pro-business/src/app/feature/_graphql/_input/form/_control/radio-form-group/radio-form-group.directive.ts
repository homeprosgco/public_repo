import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRadioFormGroup]'
})
export class RadioFormGroupDirective implements OnInit {

  @Input() appRadioFormGroup: string = '';
  @Output() radioValue: EventEmitter<string> = new EventEmitter();

  @HostListener('click', [`$event.target`])
  onChange(radioInput: HTMLInputElement) {
    this.radioValue.emit(this.appRadioFormGroup);
    document.querySelectorAll(`input[name="${radioInput.getAttribute('name')}"]`).forEach(input => {
      const inputParentNode = this.renderer2.parentNode(input);
      this.renderer2.removeClass(inputParentNode, 'checked');
    })
  }

  constructor(private el: ElementRef<HTMLInputElement>, private renderer2: Renderer2) { }

  ngOnInit(): void {
    const parentNode = this.renderer2.parentNode(this.el.nativeElement);
  }

  isChecked(parentNode: HTMLElement) {
    this.appRadioFormGroup ? this.renderer2.addClass(parentNode, 'checked') : null;
  }

}
