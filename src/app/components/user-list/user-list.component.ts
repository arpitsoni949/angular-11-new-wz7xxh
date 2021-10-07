import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public userList: User[];
  currentIndex = -1;

  ColumnDefs;
  RowData: User[];
  AgLoad: boolean;

  constructor(private service: CommonServiceService) {}

  ngOnInit() {
    this.getAgColumns();
    this.getUsersList();
    //this.getStaticList();
  }

  getAgColumns() {
    this.ColumnDefs = [
      { headerName: 'name', field: 'name', sortable: true, filter: true },
      {
        headerName: 'username',
        field: 'username',
        sortable: true,
        filter: true,
      },
      { headerName: 'email', field: 'email', sortable: true, filter: true },
      // { headerName: 'street', field: 'street', sortable: true, filter: true },
      // { headerName: 'suite', field: 'suite', sortable: true, filter: true },
      // { headerName: 'city', field: 'city', sortable: true, filter: true },
      // { headerName: 'zipcode', field: 'zipcode', sortable: true, filter: true },
      // { headerName: 'lat', field: 'lat', sortable: true, filter: true },
      // { headerName: 'lng', field: 'lng', sortable: true, filter: true },
      // { headerName: 'phone', field: 'phone', sortable: true, filter: true },
      // { headerName: 'website', field: 'website', sortable: true, filter: true },
      // { headerName: 'name', field: 'name', sortable: true, filter: true },
      // {
      //   headerName: 'catchPhrase',
      //   field: 'catchPhrase',
      //   sortable: true,
      //   filter: true,
      // },
      // { headerName: 'bs', field: 'bs', sortable: true, filter: true },
    ];
  }

  getStaticList() {
    this.AgLoad = true;
    this.RowData = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];
  }

  getUsersList(): any {
    this.AgLoad = true;
    this.RowData = [];
    this.service.getAll().subscribe(
      (data) => {
        //this.userList = data;
        // for (var u of data) {
        //   this.RowData.push(u);
        // }
        this.RowData = data as any;

        console.log('data: ' + this.RowData);
        //alert(this.RowData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
