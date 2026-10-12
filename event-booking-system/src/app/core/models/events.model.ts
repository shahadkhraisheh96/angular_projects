export interface Events {
  id: string;
  title: string;
  description: string;
  date: string;
  capacity: number;
  location: EventLocation;
  bookedSeats: number;
}

export interface EventLocation{
  address:string;
  lat:number;
  lng:number;
}