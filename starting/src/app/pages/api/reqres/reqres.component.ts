import { ReqresService } from './../../../_services/reqres.service';
import { Component, inject} from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IReqres } from '../../../_share/interfaces/reqres';

@Component({
  selector: 'app-reqres',
  imports: [CommonModule],
  templateUrl: './reqres.component.html',
  styleUrl: './reqres.component.css'
})
export class ReqresComponent {
  reqresService = inject(ReqresService);
  localReqRes$!: Observable<IReqres>;

  ngOnInit(): void {
    this.localReqRes$ = this.reqresService.getDataReqresByGet();
  }
}