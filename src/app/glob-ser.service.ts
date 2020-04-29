import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private Data  = [{
   jurusan : 'Sipil',
   desk : 'Merancang Bangunan'
  }, {
    jurusan : 'Informatika',
    desk : 'Menjadi programmer'
  }];

  public getData() {
    return this.Data;
  }

  public setData(databaru) {
    this.Data = databaru;
  }
  constructor() { }

}