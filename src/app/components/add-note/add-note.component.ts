import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit{
  noteText = "";
  allData :any= [];
  @Input() showAddNoteValue:any;
  @Input() dataToEdit : any;
  @Output() showAddNotChildValue = new EventEmitter<boolean>();
  @Output() allNotesAdded = new EventEmitter<{}>();

  constructor(private router:Router){
  }

  ngOnInit(): void {
    if(this.dataToEdit.title!=="" && this.dataToEdit.title !== undefined){
      this.noteText = this.dataToEdit.title + "\n" + this.dataToEdit.desc;
    }
  }

  getAddedNote(noteAdded:string){
    let title = noteAdded.substring(0,noteAdded.indexOf('\n'))
    let desc = noteAdded.substring(noteAdded.indexOf('\n')+1)
    if(title !==""){
      this.allNotesAdded.emit({title:title,desc:desc});
      this.showAddNotChildValue.emit(false);
    }
    else{
      alert("Title is blank");
    }
   
    
  }

  cancel(){
      this.showAddNotChildValue.emit(false);
  }
}
