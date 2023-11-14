import { Component, OnInit } from '@angular/core';
import { ControllerService } from 'src/app/services/controllers/controller.service';
import { UsersService } from 'src/app/services/users.service';
// import { TwilioEsp32Service } from '../../../../../../services/twilio-esp32.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Twilio } from '../../../../../../models/twilio-response';
import Swal from 'sweetalert2';
import { TimbreService } from 'src/app/services/timbre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user:any = {};
  public formu!:    FormGroup;
  public twilio!:   Twilio;

  constructor(
    private _sUser: UsersService,
    public _sctr: ControllerService,
    // private _sTwlEsp32: TwilioEsp32Service,
    private _sHr: TimbreService,
    private form     : FormBuilder,
    ){
    }
    ngOnInit(): void {
    this._sctr.createForm();
    this.createForm();
    this._sctr.getUserId()
    this.getwilioEsp32()

  }

  createForm(): void {
    this.formu=this.form.group({
      account_sid :["", [Validators.required], []],
      auth_token :["", [Validators.required], []],
      from_number :["", [Validators.required], []],
      to_number :["", [Validators.required], []],
      message :["", [Validators.required, Validators.maxLength(35)], []]
    })
  }
  loadForm(twilio:Twilio){
    this.formu.reset({
      account_sid :twilio?.account_sid,
      auth_token :twilio?.auth_token,
      from_number :twilio?.from_number,
      to_number :twilio?.to_number,
      message :twilio?.message
    })
  }
  send(){
    if(this.formu.invalid){
      this._sctr.showToastr_error('Revise los campos')
      return Object.values(this.formu.controls).forEach(controls=>{
        controls.markAllAsTouched()
      })
    }else{
      // console.log(this.formu.value);
      Swal.fire({
        title: 'Estas seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:'Cancelar',
        confirmButtonText: 'Guardar cambios'
      }).then((result) => {
        (result.isConfirmed)? this.putTwilio(1,this.formu.value): this.loadForm(this.twilio);
      })
    }

  }
  eliminarcuenta(){
    this._sctr.eliminar(this._sctr.user);
  }
  getUsersid(id:any){
    this._sUser.getUserId(id)
    .subscribe({
      next: (data) => {

        console.log(data);
      }
    })
  }
  getwilioEsp32(){
    this._sHr.getHorarioId(1)
    .subscribe({
      next: (data) => {
        // console.log(data);

        this.twilio=data
        this.loadForm(this.twilio)
      },
      error: (error) => {
        this._sctr.showToastr_error(error)
        // console.log(error);
      }
    })
  }

  putTwilio(id:any, twilio:Twilio){
    this._sHr.putHorario(id,twilio)
    .subscribe({
      next: (data) => {
        this.loadForm(data);
        this._sctr.showToastr_success('Twilio actualizado');
        // console.log(data);
        // this.getwilioEsp32()
      },
      error: (error) => {
        this._sctr.showToastr_error(error)
        // console.log(error);
      }
    })
  }
}
