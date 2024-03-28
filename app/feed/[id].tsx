import React from 'react';
import {Text, View} from '@/components/Themed';
import { StyleSheet } from 'react-native';
import { useGetFeedQuery } from '@/app/store/slices/feed/apis/feedApi';
import {useLocalSearchParams} from "expo-router";
import PreviewCardImage from "@/components/PreviewCardImage";
import {SRC_SIZES} from "@/constants/general";
import colors from "@/constants/Colors";

export default function FeedInfo() {
  const local = useLocalSearchParams();
  const { data } = useGetFeedQuery(+local.id);
  
  return (
    <View style={styles.container}>
      {data && (
        <>
          <PreviewCardImage src={data.data.attributes.image} size={SRC_SIZES.MEDIUM} />
          <View style={styles.content}>
            <Text style={styles.title} numberOfLines={1}>{data.data.attributes.title}</Text>
            <Text style={styles.description} numberOfLines={3}>{data.data.attributes.description}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
  },
  content: {
    padding: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    gap: 12,
    minHeight: 72,
    minWidth: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
