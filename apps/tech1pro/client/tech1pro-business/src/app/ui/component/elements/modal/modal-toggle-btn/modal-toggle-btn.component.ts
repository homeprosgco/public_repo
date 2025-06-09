import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal-toggle-btn',
  template: '<a (click)="onClick()" data-bs-toggle="modal" [href]="href.toLowerCase()"><span>{{ btnText }}</span></a>',
})
export class ModalToggleBtnComponent implements OnInit, OnChanges {


  @Input() btnText: string = 'SET BUTTON TEXT';
  // href and title of modal component must match
  @Input() href: string = 'SET HREF TEXT';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.href = `#${changes['href'].currentValue}`;
  }

  onClick() {
    const a = document.querySelectorAll('.nav-tabs');
    a.forEach( anchor => {
      console.log(anchor);
      const modalBtn = anchor?.firstChild?.firstChild as HTMLAnchorElement;
      modalBtn.click();
    })
    
    this.setTabsHeight();
    window.addEventListener('resize', () => {
      this.setTabsHeight();
    });
  }

  setTabsHeight() {
    const informationTabHeight = ((document.getElementById('infomation') as HTMLDivElement).clientHeight).toString();
    console.log(informationTabHeight);
    (document.getElementById('address') as HTMLElement).style.height = `${informationTabHeight}px`;
  }

}
