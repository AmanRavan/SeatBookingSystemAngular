import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SeatbookingService {
  private remoteUrl = 'http://localhost:2222';
  constructor(private httpClient: HttpClient) { }

  getLocation() {
    return this.httpClient.get(`${this.remoteUrl}/locationlist/list`);
  }

  getBranchByLocationId(locationID) {
    return this.httpClient.get(`${this.remoteUrl}/branch/${locationID}`);
  }

  getFloorByBranchId(branchID) {
    return this.httpClient.get(`${this.remoteUrl}/floor/${branchID}`);
  }

  getSeatDetails(floorId) {
    return this.httpClient.get(`${this.remoteUrl}/seatDetails/${floorId}`);
  }
 /* updateAndGetSeatDetails(seatId){
    return this.httpClient.get(`${this.remoteUrl}/seatDetails/update/${seatId}`);
  }*/
  
  //5th table booking
  requestSeatBooking(seatId, emailId) {
    let data = {  emailId: emailId ,seatId: seatId}
    return this.httpClient.post(`${this.remoteUrl}/seatBookingRequest`, data);
  }

  //4th table status update available to pending 
  updateBookingStatus(seatId) {
    return this.httpClient.get(`${this.remoteUrl}/seatDetails/update/${seatId}`);
  }

  updateRequest(data) {
    return this.httpClient.post(`${this.remoteUrl}/seatg/qwer`, data);
  }

  getRequestList() {
    return this.httpClient.get(`${this.remoteUrl}/seatBookingRequest/pending`)
  }


}

