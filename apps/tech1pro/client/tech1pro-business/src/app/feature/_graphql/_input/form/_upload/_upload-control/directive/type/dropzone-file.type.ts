export type DropzoneFileType = {
  dropzoneFile: {
    accepted: boolean;
    dataURL: string;
    height: number;
    previewElement: HTMLElement;
    previewTemplate: HTMLElement;
    status: string;
    upload: {
      bytesSent: number;
      filename: string;
      progress: number;
      total: number;
      uuid: string;
    },
    width: number;
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
  },
  file: File | Blob;
  uploaded: boolean;
}