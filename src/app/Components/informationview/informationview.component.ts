import { Component } from '@angular/core';
import { TruncatePipe } from '../../Core/Pipes/truncate.pipe';
import { DatePipe } from '@angular/common';
import { CustomCurrencyPipe } from '../../Core/Pipes/custom-currency.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-informationview',
  standalone: true,
  imports: [TruncatePipe, DatePipe ,MatTooltipModule, CustomCurrencyPipe],
  templateUrl: './informationview.component.html',
  styleUrl: './informationview.component.scss'
})
export class InformationviewComponent {
  isOption = false;

  toggOption() {
    this.isOption = !this.isOption;
  }

  companyData = {
    phone: '012345678910',
    protocolName: 'فودافون مصر',

    companyInfo : [
      {
        label: 'الدولة',
        value: "المملكة الأردنية الهاشمية",
        icon: "Images/flag.png"
      },
      {
        label: 'العميل الحالي',
        icon:  'Images/slogan.png',
        value: 'الشركة الألمانية للإبادة',
      }
    ],
    extensions: 9,
    lastShipment: '2024/12/29',
    balance: 5000,
    usedBalanceClient: 5000,
    usedBalanceTotal: 5000
  };
}
