
// this is the type of a Picture Object, what I got from the external API
export interface ImageObject {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// this is the type of a Picture Object, what I need in my App
export interface FilteredImageObject {
  albumId: number;
  id: number;
  url: string;
  title: string;
}