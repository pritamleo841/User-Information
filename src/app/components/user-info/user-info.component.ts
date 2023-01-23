import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public users = new Array<any>();
  constructor(private _api:ApiServiceService) { }

  ngOnInit(): void {
    this.callApiToRetrieveData();
  }
  public callApiToRetrieveData(){
    this._api.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

}
