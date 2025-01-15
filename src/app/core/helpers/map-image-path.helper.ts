export function mapImagePath(width: number, posterPath: string): string {
    return `https://image.tmdb.org/t/p/w${width}${posterPath}`
}
