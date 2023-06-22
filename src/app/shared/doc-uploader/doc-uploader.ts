import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'doc-uploader',
    templateUrl: './doc-uploader.html',
    styleUrls: ['./doc-uploader.scss']
})
export class DocUploader {
    @Output() readonly change = new EventEmitter<File[]>();
    @ViewChild('fileUpload') fileUpload: ElementRef<HTMLInputElement>;
    public files: File[] = [];

    public addDoc(event: Event) {
        const file = (event.target as HTMLInputElement).files![0];
        this.files.push(file);
        this.fileUpload.nativeElement.value = '';
        this.change.emit(this.files);
    }

    public removeDoc(file: File) {
        this.files = this.files.filter(f => f !== file);
        this.fileUpload.nativeElement.value = '';
        this.change.emit(this.files);
    }
}
