import { ISrc } from '@/app/store/interfaces/ISrc';

export type TFeedAttributes = {
  title: string
  description: string
  image: ISrc
};

export interface IFeed {
  attributes: TFeedAttributes
  id: number
}
