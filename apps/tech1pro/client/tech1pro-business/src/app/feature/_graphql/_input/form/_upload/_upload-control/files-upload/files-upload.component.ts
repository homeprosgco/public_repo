import { Component } from '@angular/core';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-files-upload',
  template: `
    <div class="nk-kycfm-upload-box">
      <div appDropzone [storage]="storage" [acceptedFiles]="'application/*'" id="files-upload-dz">
        <div class="dz-message" data-dz-message>
          <span class="dz-message-text">Drag and drop file</span>
          <span class="dz-message-or">or</span>
          <button type="button" class="btn btn-primary">SELECT</button>
        </div>
      </div>
    </div>
  `,
  providers: [StorageService]
})
export class FilesUploadComponent {

  storage!: StorageService;

  constructor(private storageSvc: StorageService) { 
    this.storage = this.storageSvc;
  }

}
