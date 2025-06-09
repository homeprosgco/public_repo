import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  template: `
    <input type="file" id="profile-img-file-input" class="profile-img-file-input">
    <label for="profile-img-file-input" class="d-block" tabindex="0">
      <span class="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded"
      style="height: 60px; width: 256px">
        <img src="assets/images/logo-dark.png" alt="logo dark" class="card-logo card-logo-dark user-profile-image img-fluid">
        <!-- <img src="assets/images/logo.png" alt="logo" class="card-logo card-logo-dark user-profile-image img-fluid"> -->
      </span>
    </label>
  `,
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
