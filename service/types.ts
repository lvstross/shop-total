export interface List {
    title: string;
    items: ListItem[];
    total: number;
}

export interface ListItem {
    id: string;
    name: string;
    price: number;
}