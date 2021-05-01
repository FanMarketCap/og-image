export type FileType = 'png' | 'jpeg';
export type Theme = 'light' | 'dark';

export interface ParsedRequest {
    fileType: FileType;
    text: string;
    theme: Theme;
    md: boolean;
    fontSize: string;
    price: any;
    h24: any;
    l24: any;
    images: string[];
    widths: string[];
    heights: string[];
}
