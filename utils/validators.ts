import * as yup from 'yup';
import {DESCRIPTION, IMAGE, TITLE} from '@/constants/general';
import { ImagePickerAsset } from 'expo-image-picker';

// Define the ImagePickerAsset schema
const imagePickerAssetSchema = yup.object({
  uri: yup.string().required(),
  mimeType: yup.string().required(),
});

export const createFeedSchema = yup.object({
  [TITLE]: yup.string().trim().required('Title is required'),
  [DESCRIPTION]: yup.string().trim().required('Description is required'),
  [IMAGE]: imagePickerAssetSchema.notRequired().default(undefined),
});
