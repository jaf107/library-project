import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path: 'book', component:BookListComponent},
  {path: 'updatebook', component:UpdateBookComponent},
  {path: 'addbook', component:AddBookComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
