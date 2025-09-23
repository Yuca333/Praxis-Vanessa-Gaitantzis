import type { ReactNode } from 'react';

export type Page = 'home' | 'about' | 'services' | 'contact';

export enum ServiceCategory {
  VORSORGE = 'Vorsorge',
  DIAGNOSTIK = 'Diagnostik',
  BETREUUNG = 'Betreuung/Programme'
}

export interface Service {
  name: string;
  category: ServiceCategory;
  description: string;
  // FIX: Changed React.ReactNode to ReactNode after importing it.
  icon?: ReactNode;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}