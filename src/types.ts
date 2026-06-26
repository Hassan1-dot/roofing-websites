export interface City {
  name: string;
  slug: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Repair';
}

export type WizardStep = 'zip' | 'type' | 'contact' | 'success';

export interface QuoteData {
  zipCode: string;
  roofType: string;
  fullName: string;
  email: string;
  phone: string;
}
