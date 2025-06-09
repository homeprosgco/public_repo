import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-head',
  template: `
  <div class="nk-block-head">
    <div class="nk-block-head-content">
      <h4 class="nk-block-title">{{title}}</h4>
      <div class="nk-block-des">
        <p>{{description}}</p>
      </div>
    </div>
  </div>
  `,
})
export class BlockHeadComponent implements OnInit {

  @Input() title: string = 'Requires a Valid Title';
  @Input() description: string = '';

  constructor() {}

  ngOnInit() {
  }

}
