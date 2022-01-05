export type FileType = "png" | "jpeg";
export type Theme = "light";

export interface ParsedRequest {
  fileType: FileType;
  text: string;
  theme: Theme;
  md: boolean;
  price: any;
  marketcap: any;
  h24: any;
  l24: any;
  username: string;
  change_24h: any;
  images: string[];
  widths: string[];
  heights: string[];
  alerts: any;
}
