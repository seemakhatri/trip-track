import { Component } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {
  start: string = '';
  end: string = '';

trips: { start: string; end: string }[] = [];

addTrip() {
  if(this.start && this.end ) {
    this.trips.push({start: this.start.trim(), end: this.end.trim() });
    this.start = '';
    this.end = '';
  }
  console.log('method clicked', this.start, this.end)
}

getCode(city:string): string {
  return city.slice(0, 3).toUpperCase();
}

isContinued(index: number ): boolean {
  if(index === 0 ) return true;
  return this.trips[index - 1].end === this.trips[index].start;
}

isDuplicate(index: number ) : boolean {
  const current = this.trips[index];
  return this.trips.findIndex((trip, i) => 
    i < index && trip.start === current.start && trip.end === current.end
  ) !== -1;
}

getTripLevel(index: number) : string {
  return this.isDuplicate(index) ? 'level-2' : 'level-1'

}

}
