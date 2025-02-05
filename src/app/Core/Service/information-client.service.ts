import { Injectable } from '@angular/core';
import { IClientInformation } from '../Interface/iclient-information';

@Injectable({
  providedIn: 'root'
})
export class InformationClientService {
  constructor() {}

  dataClient: IClientInformation[] = [
    {
      amount: 7500,
      image: "Images/slogan.png",
      orderNumber: 101,
      customerID: 4321,
      customerName: "أحمد علي محمد",
      deliveryDate: "10/12/2024",
      orderDate: "01/12/2024",
      company: "الشركة المصرية للنقل"
    },
    {
      amount: 3200,
      image: "Images/slogan.png",
      orderNumber: 102,
      customerID: 8765,
      customerName: "محمود سمير حسن",
      deliveryDate: "10/12/2024",
      orderDate: "02/12/2024",
      company: "شركة المستقبل للتجارة"
    },
    {
      amount: 6200,
      image: "Images/slogan.png",
      orderNumber: 103,
      customerID: 9987,
      customerName: "إبراهيم عبد الله",
      deliveryDate: "15/12/2024",
      orderDate: "03/12/2024",
      company: "الشركة العربية للمواد الغذائية"
    },
    {
      amount: 5400,
      image: "Images/slogan.png",
      orderNumber: 104,
      customerID: 5634,
      customerName: "علي محمود حسن",
      deliveryDate: "10/12/2024",
      orderDate: "04/12/2024",
      company: "شركة السلام للأدوات الكهربائية"
    },
    {
      amount: 8700,
      image: "Images/slogan.png",
      orderNumber: 105,
      customerID: 6754,
      customerName: "يوسف أحمد إبراهيم",
      deliveryDate: "18/12/2024",
      orderDate: "05/12/2024",
      company: "الشركة الحديثة للملابس"
    },
    {
      amount: 2900,
      image: "Images/slogan.png",
      orderNumber: 106,
      customerID: 3214,
      customerName: "محمد فتحي السيد",
      deliveryDate: "10/12/2024",
      orderDate: "06/12/2024",
      company: "شركة النور للأجهزة الطبية"
    },
    {
      amount: 5100,
      image: "Images/slogan.png",
      orderNumber: 107,
      customerID: 7568,
      customerName: "هشام عبد العزيز",
      deliveryDate: "22/12/2024",
      orderDate: "07/12/2024",
      company: "الشركة السعودية للصناعات الغذائية"
    },
    {
      amount: 9300,
      image: "Images/slogan.png",
      orderNumber: 108,
      customerID: 9876,
      customerName: "سعيد محمد سالم",
      deliveryDate: "-",
      orderDate: "08/12/2024",
      company: "شركة الهدى للمفروشات"
    },
    {
      amount: 4500,
      image: "Images/slogan.png",
      orderNumber: 109,
      customerID: 1298,
      customerName: "كريم أحمد زكي",
      deliveryDate: "25/12/2024",
      orderDate: "09/12/2024",
      company: "الشركة الهندسية للمعدات"
    },
    {
      amount: 7700,
      image: "Images/slogan.png",
      orderNumber: 110,
      customerID: 5467,
      customerName: "إيهاب محمود عبد الرحمن",
      deliveryDate: "-",
      orderDate: "10/12/2024",
      company: "شركة المستقبل للتوزيع"
    }
  ];
}
