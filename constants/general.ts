export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';
export const THUMBNAIL = 'thumbnail';
export const TITLE = 'title';
export const DESCRIPTION = 'description';
export const IMAGE = 'image';
export const FILES = 'files';
export const FIELD = 'field';
export const REF_ID = 'refId';
export const REF = 'ref';
export const PATH = 'path';
export const MIME = 'mimeType';
export const URI = 'uri';
export const SRC_SIZES = {SMALL, MEDIUM, LARGE, THUMBNAIL} as const;

export type TSrcSize = typeof SRC_SIZES[keyof typeof SRC_SIZES];
