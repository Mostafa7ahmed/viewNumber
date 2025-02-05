import { Component, inject, OnInit } from '@angular/core';
import { HeaderviewnumberComponent } from "../../Components/headerviewnumber/headerviewnumber.component";
import { InformationviewComponent } from "../../Components/informationview/informationview.component";
import { TruncatePipe } from '../../Core/Pipes/truncate.pipe';
import { IClientInformation } from '../../Core/Interface/iclient-information';
import { InformationClientService } from '../../Core/Service/information-client.service';
import { CustomCurrencyPipe } from '../../Core/Pipes/custom-currency.pipe';
import { TabledataComponent } from "../../Components/tabledata/tabledata.component";
import { FooterviewnmberComponent } from "../../Components/footerviewnmber/footerviewnmber.component";

@Component({
  selector: 'app-view-nuumber',
  standalone: true,
  imports: [HeaderviewnumberComponent, InformationviewComponent, TabledataComponent, FooterviewnmberComponent],
  templateUrl: './view-nuumber.component.html',
  styleUrl: './view-nuumber.component.scss'
})
export class ViewNuumberComponent  {

  isVisible = true;

  toggleView() {
    this.isVisible = !this.isVisible;
  }
}
