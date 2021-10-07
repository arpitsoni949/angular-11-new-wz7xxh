import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { UserListComponent } from './user-list.component';
import { AgGridComponent } from '../ag-grid/ag-grid.component';

@NgModule({
  imports: [CommonModule, AgGridModule.withComponents([])],
  declarations: [UserListComponent, AgGridComponent],
})
export class UserListModule {}
