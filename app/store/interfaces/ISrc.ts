import { LARGE, MEDIUM, MIME, PATH, SMALL, THUMBNAIL } from '@/constants/general';

export type TFormatFile = {
  uri: string
  type: string
  name: string | undefined
};

export type TFormatPhoto = {
  [PATH]: string
  [MIME]: string
};

export type TSrcFormat = {
  url: string
  name: string
  previewUrl: string
  createdAt: string
  updatedAt: string
};

export interface ISrcFormats {
  [SMALL]: TSrcFormat
  [MEDIUM]: TSrcFormat
  [LARGE]: TSrcFormat
  [THUMBNAIL]: TSrcFormat
}

export interface ISrc {
  data: {
    attributes: {
      url: string
      name: string
      previewUrl: string
      createdAt: string
      updatedAt: string
      formats: ISrcFormats
    }
    id: number
  }
}
