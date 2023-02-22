import { NgModule} from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms'
interface FileItem{
  file:File;
  checked:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class FileUploadComponent implements OnInit {
  fileItems: FileItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  onDrop(event: any): void {
    event.preventDefault();
    const files: File[] = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      this.fileItems.push({
        file: files[i],
        checked: false
      });
    }
  }
  onFileSelected(event: any): void {
    const files: File[] = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.fileItems.push({
        file: files[i],
        checked: false
      });
    }
  }
  onCheckAll(event: any): void {
    const checked = event.target.checked;
    this.fileItems.forEach((item) => item.checked = checked);
  }
  onDeleteSelected(): void {
    this.fileItems = this.fileItems.filter((item) => !item.checked);
  }
}
export class AppComponent {
  title = 'appli';
}
