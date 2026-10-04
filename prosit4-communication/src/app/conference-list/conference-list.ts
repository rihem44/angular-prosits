import { Component, output, signal } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../conference';

@Component({
  selector: 'app-conference-list',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferenceSelected = output<Conference>();

  conferences = signal<Conference[]>([
    { id: 1, title: 'Angular Signals', description: 'Réactivité moderne', date: new Date('2026-11-20'), place: 'Tunis', maxParticipants: 100, nbParticipants: 95 },
    { id: 2, title: 'Cloud & DevOps', description: 'CI/CD en pratique', date: new Date('2026-12-05'), place: 'Sousse', maxParticipants: 50, nbParticipants: 50 },
    { id: 3, title: 'IA générative', description: 'LLM et applications', date: new Date('2026-12-15'), place: 'Sfax', maxParticipants: 200, nbParticipants: 60 },
  ]);

  select(c: Conference) {
    this.conferenceSelected.emit(c);
  }
}