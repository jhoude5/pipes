import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = '';
  date = '';
  amount = '';
  miles = 0;
  onNameChange(event: Event){
    
    const target = event.target as HTMLInputElement;
    const parsedValue = String(target.value);

    this.name = parsedValue;
  }
  onDateChange(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = String(target.value);

    this.date = parsedValue;
  }
  onAmountChange(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = String(target.value);

    this.amount = parsedValue;
  }
  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    this.miles = parsedValue;
  }
}
