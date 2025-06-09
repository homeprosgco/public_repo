import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './firebase/firebase.module';
import { DropzoneDirective } from './_upload-control/directive/dropzone/dropzone.directive';
import { FilesUploadComponent } from './_upload-control/files-upload/files-upload.component';
import { ImagesUploadComponent } from './_upload-control/images-upload/images-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FirebaseModule
  ],
  declarations: [
    DropzoneDirective,
    ImagesUploadComponent,
    FilesUploadComponent
  ],
  exports: [
    DropzoneDirective,
    ImagesUploadComponent,
    FilesUploadComponent
  ]
})
export class UploadModule { }
