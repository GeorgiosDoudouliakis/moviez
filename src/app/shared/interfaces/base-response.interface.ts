export interface BaseResponse<Item> {
    page: number;
    results: Item[];
    total_pages: number;
    total_results: number;
}
