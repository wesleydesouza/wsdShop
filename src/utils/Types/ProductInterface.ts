export interface ProductInterface{
    id: number,
    title: string,
    description: string,
    discountPercentage?: number,
    images: string[],
    price?: number,
    rating?: number,
    stock?: number,
    thumbnail: string
}