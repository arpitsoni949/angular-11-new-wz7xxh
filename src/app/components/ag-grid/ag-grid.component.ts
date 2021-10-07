import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
})
export class AgGridComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() ColumnDefs: any;
  @Input() RowData: User[];
  @Input() IsColumnsToFit: boolean;

  gridApi: any;
  gridColumnApi: any;

  BindData(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.RowData);
    if (this.IsColumnsToFit) {
      this.gridApi.sizeColumnsToFit();
    }
  }
}
