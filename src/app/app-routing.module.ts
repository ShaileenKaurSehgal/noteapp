import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNotesComponent } from './components/all-notes/all-notes.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

const routes: Routes = [
  {path:"",component:AllNotesComponent},
  {path:"addnote",component:AddNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
