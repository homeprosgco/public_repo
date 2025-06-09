import { Directive, ElementRef, Input, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { DropzoneFileType } from '../../../../../../../../_type';
import { StorageService } from '../../../service/storage.service';

@Directive({
  selector: '[appDropzone]',
})
export class DropzoneDirective implements OnDestroy {

  @Input() storage!: StorageService;
  @Input() acceptedFiles: string = 'image/*';
  #dzInputFileNames: string[] = [];

  constructor(
    private el: ElementRef<HTMLDivElement>,
    private renderer2: Renderer2
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    const storage = changes['storage'].currentValue;

    const self = this;

    console.log(this.acceptedFiles)
    NioApp.Dropzone(this.el.nativeElement, {
      url: "/images",
      acceptedFiles: this.acceptedFiles,
      autoProcessQueue: false,
      maxFiles: 5,
      maxFilesize: 10,
      init() {
        console.log('init dropzone');
        this.on('addedfile', async (file: any) => {

          console.log('file', (file.type as string).startsWith('application'));

          if ((file.type as string).startsWith('application')) {
            const dzHiddenFileInput = document.querySelector('input[accept^="application"]') as HTMLInputElement;
            console.log('hidden file input', dzHiddenFileInput);
            self.#processFiles(dzHiddenFileInput, file);

            const thumbnail = ((file as any).previewTemplate as HTMLDivElement).querySelector('.dz-image [data-dz-thumbnail]');
            if (((file as any).type as string).startsWith('application/pdf')) {
              thumbnail?.setAttribute('src', 'assets/images/placeholder/pdf-placeholder.png');
            }

            if (((file as any).type as string).startsWith('application/octet-stream')) {
              thumbnail?.setAttribute('src', 'assets/images/placeholder/docx-placeholder.png');
            }

          }

          if ((file.type as string).startsWith('image')) {
            const dzHiddenImageInput = document.querySelector('input[accept^="image"]') as HTMLInputElement;
            console.log('hidden file input', dzHiddenImageInput);
            self.#processFiles(dzHiddenImageInput, file);
          }

        }),
          this.on('error', (file: DropzoneFileType, message: string) => {
            console.log(`file upload error: ${file} - ${message}`);
          }),
          this.on('maxfilesexceeded', (file: DropzoneFileType) => {
            const dropzone = this;
            console.log(`max file upload amount exceeded: ${file}`);
            const errorUploads = self.el.nativeElement.querySelectorAll('.dz-error');
            for (let i = 0; i < errorUploads.length; i++) {
              errorUploads.item(i).addEventListener('click', (e) => {
                const rejectedFiles: DropzoneFileType[] = dropzone.getRejectedFiles();
                console.log(rejectedFiles);
                for (const file of rejectedFiles) {
                  dropzone.removeFile(file);
                }
              })
              console.log(errorUploads.item(i));
            }
          }),
          this.on('maxfilesreached', (files: DropzoneFileType[]) => {
            console.log(`max files reached: ${files}`);
          }),
          this.on('thumbnail', (file: DropzoneFileType, _dataURL: string) => {
            console.log(`File and DataURL: ${file}`);
          })
      }
    });
    this.renderer2.setStyle(this.el.nativeElement, 'height', '350px');

  }

  #processFiles(dzHiddenInput: HTMLInputElement, file: any) {
    const length = dzHiddenInput.files?.length as number;
    for (let i = 0; i < length; i++) {
      let dzfile = dzHiddenInput.files?.item(i) as File;
      if (!this.#dzInputFileNames.includes(dzfile.name)) {
        this.#dzInputFileNames.push(dzfile.name);
        console.log(this.#dzInputFileNames)
        const dropzoneFile: DropzoneFileType = {
          dropzoneFile: file,
          file: dzfile,
          uploaded: false
        };
        this.storage.addFile(dropzoneFile);
      }
    }
  }

  ngOnDestroy(): void {
    this.#dzInputFileNames.length = 0;
  }

}
