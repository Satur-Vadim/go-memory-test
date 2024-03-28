import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '@/constants/Colors';
import getImageUrl from '@/utils/helpers';
import { TSrcSize } from '@/constants/general';
import { ISrc } from '@/app/store/interfaces/ISrc';

function PreviewCardImage({ src, size }:  {
  size: TSrcSize
  src?: ISrc
}) {
  const imageUrl = src?.data ? getImageUrl(src.data.attributes.formats, size) : '';
  return !!imageUrl ? (
    <Image
      source={{ uri: imageUrl }}
      style={styles.image}
    />
  ) : (
    <View style={styles.image} />
  );
}
export default PreviewCardImage;

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
    maxHeight: 164,
    minHeight: 164,
    minWidth: '90%',
    backgroundColor: colors.dark.tabIconDefault,
  },
});
