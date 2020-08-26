import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeatbookingService } from '../services/seatbooking.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
	selectLocationForm: FormGroup;
	locationList: any;
	branchList: any;
	floorList: any;
	floors
  
	// locationList = [{ value: 'bangalore', name: 'Bangalore' }, { value: 'dubai', name: 'Dubai' }]
	// branchList = [{ value: 'BTM layout', name: 'BTM Layout' }, { value: 'rajajinagar', name: 'Rajaji Nagar' },
	// { value: 'bur dubai', name: 'Bur Dubai' }, { value: 'deira', name: 'Deira' }]
  
	// floorList = [{ value: '1', name: '1' }, { value: '2', name: '2' }, { value: '3', name: '3' }]
  
	constructor(private fb: FormBuilder, private router: Router, private sbService: SeatbookingService,private title: Title) { }
  
	ngOnInit() {
		console.log("Location is loaded");
		this.title.setTitle('Angular Cascading or Dependent Dropdown');

	  this.selectLocationForm = this.fb.group(
		{
		  location: ['', Validators.required],
		  branch: ['', Validators.required],
		  floor: ['', Validators.required],
  
		}
	  );
  
	  this.sbService.getLocation().subscribe((data) => {
		console.log(data);
		this.locationList = data;
	  })
	}
  
	get getLocation() { return this.selectLocationForm.get('location'); }
	get getBranch() { return this.selectLocationForm.get('branch'); }
	get getFloor() { return this.selectLocationForm.get('floor'); }
  
	locationSubmit() {
	  if (this.selectLocationForm.invalid) {
		return;
	  }
	  //navigate to seatBoooking component
	  this.router.navigate(['seatBooking'], { queryParams: { location: this.getLocation.value, branch: this.getBranch.value, floor: this.getFloor.value } });
	  //reset the form
	  this.resetForm(this.selectLocationForm)
  
	}
  
	resetForm(form) {
	  form.reset();
	}
  
	getBranchByLocation(event) {
	  this.branchList = []
	  let value = event.target.value;
	  let location_id = value.split(": ").pop();
  
	  this.sbService.getBranchByLocationId(location_id).subscribe((data) => {
		console.log(data);
		this.branchList = data; //may need to parse data
	  })
  
	}
  
	getFloorByBranch(event) {
	  this.floorList = []
	  let value = event.target.value;
	  console.log(event.target.value,'EventValue')
	  let branch_id = value.split(": ").pop();
	  console.log(branch_id,'BranchID')
		/*
	  this.branchList.forEach(element => {
		if (branch_id == element.branch_id) {
		  this.floors = element.total_floors
		  for (let i = 0; i < this.floors; i++) {
			this.floorList.push(i + 1);
		  }
		}
	  }); */
	  this.sbService.getFloorByBranchId(branch_id).subscribe((data) => {
		console.log(data,'BranchData');
		this.floorList = data; //may need to parse data
	  })

	}
}