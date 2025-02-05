import { Component, inject, OnInit } from '@angular/core';
import { IClientInformation } from '../../Core/Interface/iclient-information';
import { InformationClientService } from '../../Core/Service/information-client.service';
import { TruncatePipe } from '../../Core/Pipes/truncate.pipe';
import { CustomCurrencyPipe } from '../../Core/Pipes/custom-currency.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tabledata',
  standalone: true,
  imports: [CustomCurrencyPipe ,TruncatePipe , MatTooltipModule],
  templateUrl: './tabledata.component.html',
  styleUrl: './tabledata.component.scss'
})
export class TabledataComponent implements OnInit  {
  clients:IClientInformation[] = [];
 

  private clientService = inject(InformationClientService);

  selectOptions:number[] = [5, 10, 15,20,30];
  ngOnInit() {
    this.clients = this.clientService.dataClient;
  }

}
