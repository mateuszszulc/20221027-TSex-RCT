export interface User {
    id: number;
    website?: string;
    name: string;
    email: string;
    company?: {
        catchPhrase?: string
    };
}