import { Component, OnInit } from '@angular/core';
import { SeatbookingService } from '../services/seatbooking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  
  rows = [1, 2, 3, 4 ,5, 6, 7]
  seatArrangement = {
    rows: 20, columns: 8
  }
  floorId
  isdisable=false;
 seatDetailsList
 // seatDetailsList:{seatId:Number, floorId:Number,seatStatus:String,seatName:String}[] = []
  
  constructor(private route: ActivatedRoute, private router: Router, private sbService: SeatbookingService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     this.floorId=params.floor
    })
    this.sbService.getSeatDetails(this.floorId).subscribe((data) => {
      console.log(data);
      
     this.seatDetailsList=data;
    })
  }

  bookSeat(seatId) {
    this.sbService.requestSeatBooking(seatId, localStorage.getItem('emailId')).subscribe((data) => {
      console.log(data);
      alert(`Your booking request for seat ${seatId} has been sent`);
      this.isdisable=true;
    })

    this.sbService.updateBookingStatus(seatId).subscribe((data) => {
      this.seatDetailsList.forEach((value, index) => {
        if (value.seatId == seatId) {
          value.seatStatus = "Pending";
        }
      })
    })


  }

}
