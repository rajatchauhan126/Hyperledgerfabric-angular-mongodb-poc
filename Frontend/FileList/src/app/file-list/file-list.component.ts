import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { saveAs} from 'file-saver';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
files: any[];
status : any;
downloading : string = null;

  constructor(private fileService : FileService) { }


  ngOnInit() {
	   this.getFiles();
	  }
	  
	getFiles(): void {
		this.fileService.getFiles()
		.subscribe(files => {
		this.files = files.data },
		error => console.log(error)
		)
	};
	
	downloadFile(file : string) : void {
		this.downloading = 'downloading';
		this.fileService.downloadFile(file)
		.subscribe(data => { 
			saveAs(data, file);
			this.downloading = 'success';
			},
			error => console.log(error)
		)
	};
}
