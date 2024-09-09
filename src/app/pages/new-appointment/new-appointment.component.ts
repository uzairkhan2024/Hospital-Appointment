import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent {

  appointmentobj: any = {
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "2023-12-22T05:50:31.728Z",
    "appointmentTime": "",
    "isFirstVisit": true,
    "naration": ""
  };

  constructor(private master: MasterService){}

  onSaveAppointment() {
    this.master.createNew(this.appointmentobj).subscribe((res:any)=>{
      if(res.result) {
        alert("Appointment Done & Appintment No is -" + res.data.appointmentNo);
      }
    },errror => {
      alert("API Error/ Check Form")
    })
  }
  
}
