import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '@/constants/Colors';

import { Text, View } from '@/components/Themed';
import { Link } from "expo-router";


import PreviewCardImage from '@/components/PreviewCardImage';

import { SRC_SIZES } from '@/constants/general';
import { TFeedAttributes } from '@/app/store/slices/feed/interfaces/IFeed';

function FeedCard({ attributes, id }: {
  id: number
  attributes: TFeedAttributes
}) {
  return (
    <Link href={
      {
        pathname: '/feed/[id]',
        params: { id },
      }
    } asChild>
    <TouchableOpacity
      style={styles.container}
    >
      <PreviewCardImage src={attributes.image} size={SRC_SIZES.MEDIUM} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{attributes.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{attributes.description}</Text>
      </View>
    </TouchableOpacity>
    </Link>
  );
}

export default FeedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 253,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.light.tint,
    flexDirection: 'column',
  },
  content: {
    padding: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'space-between',
    flex: 1,
    minHeight: 72,
    maxHeight: 85,
  },
  title: {
    fontSize: 15,
    lineHeight: 18.6,
    color: colors.light.text,
    letterSpacing: -0.15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 0,
  },
  description: {
    fontSize: 13,
    lineHeight: 16.1,
    color: colors.light.text,
    letterSpacing: -0.15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingBottom: 0,
  },
});
