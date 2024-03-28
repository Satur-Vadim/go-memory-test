import React from 'react';
import { FlatList} from 'react-native';
import { StyleSheet } from 'react-native';

import { IFeed } from '@/app/store/slices/feed/interfaces/IFeed';
import FeedCard from '@/components/FeedCard';

function FeedList(data: { data: IFeed[] }) {
  return (
    <FlatList
      data={data.data}
      keyExtractor={(item: IFeed) => `${item.id}`}
      numColumns={1}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <FeedCard
          key={item.id}
          id={item.id}
          attributes={item.attributes}
        />
      )}
    />
  );
}

export default FeedList;


const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 20,
    gap: 20,
  },
});
