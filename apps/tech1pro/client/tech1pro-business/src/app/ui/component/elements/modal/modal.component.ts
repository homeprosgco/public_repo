import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal fade" [id]="id.toLowerCase()">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <a href="#" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <em class="icon ni ni-cross-sm"></em>
                </a>
                <div class="modal-body modal-body-md">
                    <h5 class="modal-title">{{title}}</h5>
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div><!-- .Add Modal-Content -->
  `,
})
export class ModalComponent implements OnInit {

  @Input() title: string = 'SET MODAL TITLE';
  @Input() id: string = 'SET MODAL ID';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('modal init');
    const a = document.querySelector('.nav-tabs')?.firstChild?.firstChild as HTMLAnchorElement;
    a.click();
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
