export class EncodingUtilities {
    public static encodeIdNameParam(id: number, name: string): string {
        return `${id}-${name.replaceAll(" ", "-")}`;
    };

    public static encodeQueryParams(params: string): string {
        return params.replaceAll(" ", "-");
    }
}
