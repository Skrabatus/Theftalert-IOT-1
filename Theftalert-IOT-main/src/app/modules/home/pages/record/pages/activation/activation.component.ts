import { Component, OnInit } from '@angular/core';
import { ActivationService } from 'src/app/services/activation.service';
import { ControllerService } from 'src/app/services/controllers/controller.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit{
  panelOpenState = false;
  activation:any[]=[];


  constructor(
    private _sActivation: ActivationService,
    private _sCtr: ControllerService
  ) {

  }
  ngOnInit(): void {
    this.getActivation()
  }


  getActivation(){
    this._sActivation.getActivation()
    .subscribe({
      next: (data:any) => {
        this.activation=data;
        console.log(data);
      },
      error: (err) => {
        // console.log(err);
        this._sCtr.showToastr_error(err)
      }
    });
  }
}
