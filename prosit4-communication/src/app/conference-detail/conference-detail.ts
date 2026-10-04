import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../conference';

@Component({
  selector: 'app-conference-detail',
  imports: [DatePipe],
  templateUrl: './conference-detail.html',
})
export class ConferenceDetail {
  conference = input<Conference | null>(null);
}