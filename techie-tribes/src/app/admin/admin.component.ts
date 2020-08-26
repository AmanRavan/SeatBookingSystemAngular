import { Component, OnInit } from '@angular/core';
import { SeatbookingService } from '../services/seatbooking.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  requestList: Object;

  constructor(private sbService:SeatbookingService) { }

  ngOnInit() {
    this.sbService.getRequestList().subscribe((data)=>{
      this.requestList=data
    })
  }

  updateBookingRequest(data){
    this.sbService.updateRequest(data).subscribe((data)=>{
      console.log(data);
    })
  }
}
