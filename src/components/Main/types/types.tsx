export interface ItemInterface {
    imageUrl: string;
    title: string;
    genres: Genre[];
    synopsis: string;
    loadingInsideCard: boolean;
    id: number;
    setCardOpen?: (trueFalse: boolean) => void;
    images?: {
        webp: {
            image_url: string;
            large_image_url: string;
        };
    };
}

export interface ItemArrInterface {
    score: number;
    mal_id: number;
    images: {
        webp: {
            large_image_url: string;
            image_url: string;
        };
    };
    title: string;
    genres: Genre[];
    synopsis: string;
}
export interface PaginationData {
    last_visible_page: number;
    current_page: number;
}

export interface Genre {
    mal_id: number;
    name: string;
}
