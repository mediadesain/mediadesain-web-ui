export interface FilesInterface {
    photos: any;
    videos: any;
}

export interface MaterialInterface {
    file: string;
    id: string;
    idclass: string;
    no: number;
    title: string;
    url: string;
    video: string;
    videourl: string;
}

export interface ClassInterface {
    category?: string;
    content?: string;
    date?: number;
    dateupdate?: number;
    files?: FilesInterface;
    idclass?: string;
    iduser?: string;
    keyword?: string;
    level?: string;
    price?: number;
    status?: string;
    title?: string;
    url?: string;
    _level?: string[];
    _materials?: MaterialInterface[];
    _materialscount?: number;
    _thumbnail?: string;
    _selected?: MaterialInterface;
    _videos?: string[];
  }
