import { Component, signal } from '@angular/core';
import { ConferenceList } from './conference-list/conference-list';
import { ConferenceDetail } from './conference-detail/conference-detail';
import { Conference } from './conference';

@Component({
  selector: 'app-root',
  imports: [ConferenceList, ConferenceDetail],
  templateUrl: './app.html',
})
export class App {
  selectedConference = signal<Conference | null>(null);

  onSelect(c: Conference) {
    this.selectedConference.set(c);
  }
}