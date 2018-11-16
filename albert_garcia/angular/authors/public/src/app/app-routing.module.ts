import { NgModule } from '@angular/core';
import { AuthorsComponent } from './authors/authors.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'authors',component: AuthorsComponent },
  { path: 'authors/edit/:id',component: EditComponent },
  { path: 'authors/new',component: NewComponent },
  { path: 'notfound',component: NotfoundComponent },
  { path: '', pathMatch: 'full', redirectTo: '/authors' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
