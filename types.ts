
export type Page = 'home' | 'about' | 'services' | 'contact';

export enum ServiceCategory {
  VORSORGE = 'Vorsorge',
  DIAGNOSTIK = 'Diagnostik',
  BETREUUNG = 'Betreuung/Programme'
}

export interface Service {
  name: string;
  category: ServiceCategory;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
