
export enum ProductCategory {
    DESIGN = 'تصميمات',
    TEMPLATE = 'قوالب',
    VIDEO = 'فيديوهات',
    AUDIO = 'صوتيات',
    COURSE = 'كورسات',
}

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: ProductCategory;
    images: string[];
    features: string[];
    demo_audio?: string;
    demo_video?: string;
    usageInfo: string;
    targetAudience: string;
    bestseller?: boolean;
    discount_percentage?: number;
    valid_until_date?: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Order {
    id: string;
    userId: string;
    userName: string;
    items: CartItem[];
    total: number;
    paymentMethod: string;
    paymentProof?: string;
    status: 'Pending' | 'Completed' | 'Failed';
    date: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Customer';
    phone: string;
    createdAt: string;
}