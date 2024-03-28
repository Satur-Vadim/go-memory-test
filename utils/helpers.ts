import { ISrcFormats } from '@/app/store/interfaces/ISrc';
import { API_BASE_URLS } from '@/constants/protectedConstants';

const getImageUrl = (formats: ISrcFormats, size: keyof ISrcFormats): string => {
  const sizes = ['small', 'medium', 'large', 'thumbnail'];
  const index = sizes.indexOf(size);
  
  for (let i = index; i < sizes.length; i++) {
    const currentSize = sizes[i] as keyof ISrcFormats;
    if (formats[currentSize]) {
      return `${API_BASE_URLS}${formats[currentSize].url}`;
    }
  }
  
  return '';
}

export default getImageUrl;
