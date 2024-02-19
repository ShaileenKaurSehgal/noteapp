import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss'],
})
export class AllNotesComponent implements OnInit {
  addNoteTitle: any = '';
  addNoteDesc: any = '';
  searchTitle = '';
  addedNotes: any[] = [];
  allNotes: any[] = [];
  showAddNote = false;
  showList = false;
  showNoData = true;
  dataToEdit:any = {};
  editedDataIndex :any;

  constructor(private router: Router) {}
  ngOnInit(): void {}
  addNote() {
    this.showAddNote = true;
  }
  deleteNote(index: any) {
    alert('This will be deleted');
    this.addedNotes.splice(index, 1);
    this.allNotes.splice(index, 1);
  }
  editNote(index:any){
    this.showAddNote = true;
    this.dataToEdit = this.addedNotes[index];
    this.editedDataIndex = index;
  }
  titleSearch(title: any) {
    this.addedNotes = this.addedNotes.filter(
      (x: any) => x.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  getChildAddNoteValue(e: any) {
    this.showAddNote = e;
  }
  clearSearch() {
    this.addedNotes = this.allNotes;
    this.searchTitle = '';
  }
  getAllData(e: any) {
    if(Object.keys(this.dataToEdit).length>0){
      this.addedNotes[this.editedDataIndex] = e;
    }
    else{
      this.addedNotes.push(e);
    }
    this.allNotes = [...this.addedNotes];
    console.log(this.addedNotes);
    if (this.addedNotes.length > 0) {
      this.showList = true;
      this.showNoData = false;
    }
    this.dataToEdit = {};
  }
}
