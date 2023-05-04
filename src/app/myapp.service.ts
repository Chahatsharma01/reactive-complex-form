import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyappService {
alldata : any;
  constructor() { }


logindata(data :any){
  this.alldata.push(data)


}

getData(){
  return this.alldata;
}

}
