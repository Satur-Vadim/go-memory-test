import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {useGetFeedsQuery} from "@/app/store/slices/feed/apis/feedApi";
import FeedList from '@/components/FeedList';

export default function TabOneScreen() {
  const { data } = useGetFeedsQuery({});
  return (
    <View style={styles.container}>
      {data && <FeedList data={data.data}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
});
