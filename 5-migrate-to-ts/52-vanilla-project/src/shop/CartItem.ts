interface Money {
    value: number;
    currency: 'PLN' | 'USD'; 
}

export interface CartItem {
    name: string;
    amount: number;
    unit: 'kg' | 'l' | 'item';
    price: Money
}