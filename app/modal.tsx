import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { View } from '@/components/Themed';
import {useCreateFeedMutation, useUploadImageFeedMutation} from '@/app/store/slices/feed/apis/feedApi';
import { useForm } from 'react-hook-form';
import { DESCRIPTION, FIELD, FILES, IMAGE, REF, REF_ID, TITLE } from '@/constants/general';
import { createFeedSchema } from '@/utils/validators';
import { yupResolver } from '@hookform/resolvers/yup';
import { Maybe } from 'yup';
import CreateField from '@/components/CreateField';
import { TFormatPhoto } from '@/app/store/interfaces/ISrc';
import {ImagePickerAsset} from "expo-image-picker/src/ImagePicker.types";
import {IFormData} from "@/app/store/types/IFormData";
import {router} from "expo-router";

export type ModalCreateScreenForm = {
  [TITLE]: string
  [DESCRIPTION]: string
  [IMAGE]?: {
    uri: string;
    mimeType: string;
  } | null
};

export default function ModalCreateField() {
  const [createFeed, { isLoading }] = useCreateFeedMutation();
  const [uploadImageFeed] = useUploadImageFeedMutation();

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitted },
    getValues,
    setValue,
  } = useForm<ModalCreateScreenForm>({
    resolver: yupResolver(createFeedSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const handleCreateFeed = (values: ModalCreateScreenForm) => {
    // Create feed
    createFeed({
      data: {
        [TITLE]: values[TITLE],
        [DESCRIPTION]: values[DESCRIPTION],
        [IMAGE]: null,
      },
    }).unwrap().then(({ data: createdFeed }) => {
      // After feed created, upload image to feed
      if (values[IMAGE]) {
        const formData = new FormData() as IFormData;
        const filename = values[IMAGE].uri.split('/').pop() || 'image.png';

        formData.append("files", {
          uri: values[IMAGE].uri,
          type: values[IMAGE]?.mimeType,
          name: filename,
        }, filename);
        formData.append('field', 'image');
        formData.append('ref', 'api::feed.feed');
        formData.append('refId', `${createdFeed.id}`);

        uploadImageFeed(formData).unwrap()
      }
    }).finally(() => {
      router.back();
    })
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.5,
    });
    if (!result.canceled) {
      setValue(IMAGE, {
        uri: result.assets[0].uri,
        mimeType: result.assets[0].mimeType || '',
      });
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <CreateField
        control={control}
        isDisabled={(!isValid && isSubmitted) || isLoading}
        continueHandler={handleSubmit(handleCreateFeed)}
        pickImageAsync={pickImageAsync}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
