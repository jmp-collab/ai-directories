// Datenwerte bleiben englisch und stabil (API-Vertrag). Deutsche Anzeige-Labels: utils/i18n-de.js
export type SubmissionExperience = 'Good' | 'Bad' | '';
export type Pricing = 'Free' | 'Paid' | '';

export type Directory = {
    name: string;
    link: string;
    submission_link: string;
    domain_rating: number;
    monthly_visits: number;
    submission_experience: SubmissionExperience;
    pricing: Pricing;
    dealCode?: string;
    dealText?: string;
    icon?: string;
};
