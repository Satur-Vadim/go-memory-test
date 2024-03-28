import type { TFileType } from './TFileType';

export interface IFormData {
  append(name: string, value: string | number | Blob | TFileType, fileName?: string): void;
}
