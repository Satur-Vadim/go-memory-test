import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { ModalCreateScreenForm } from '@/app/modal';
import { Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { DESCRIPTION, IMAGE, TITLE } from '@/constants/general';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';

function CreateField({
  control,
  isDisabled,
  continueHandler,
  pickImageAsync,
}: {
  control: Control<ModalCreateScreenForm>;
  isDisabled: boolean;
  continueHandler: () => void;
  pickImageAsync: () => void;
}) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={continueHandler}
        disabled={isDisabled}
        style={[styles.button, isDisabled && styles.buttonDisable]}
      >
        <Text style={styles.buttonText}>Create feed</Text>
      </TouchableOpacity>
      <Controller
        name={TITLE}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <View>
            <Text style={styles.titleController}>Title</Text>
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={'Title'}
              multiline
              style={styles.input}
            />
            {invalid && (
              <Text style={styles.errorText}>{error?.message}</Text>
            )}
          </View>
        )}
      />
      <Controller
        name={DESCRIPTION}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error, invalid } }) => (
          <View>
            <Text style={styles.titleController}>Description</Text>
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={'Description'}
              multiline
              style={styles.input}
            />
            {invalid && (
              <Text style={styles.errorText}>{error?.message}</Text>
            )}
          </View>
        )}
      />
      <Controller
        name={IMAGE}
        control={control}
        render={({ field: { value, onChange } }) => (value ? (
            <View style={styles.imagePreviewContainer}>
              <Text style={styles.titleController}>Image</Text>
              <Image
                source={{ uri: value.uri }}
                style={styles.imagePreview}
              />
            </View>
          ) : (
            <View style={styles.addImageContainer}>
              <TouchableOpacity onPress={pickImageAsync} style={styles.addImageButton}>
                <FontAwesome
                  name="plus-circle"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].icon}
                />
                <Text style={styles.addImageText}>Add image</Text>
              </TouchableOpacity>
            </View>
          )
        )}
      />
    </View>
  );
}

export default CreateField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  titleController: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
    color: '#121822',
  },
  input: {
    fontSize: 15,
    lineHeight: 19,
    paddingTop: 13,
    paddingBottom: 13,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    marginBottom: 16,
    minWidth: '100%',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  addImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  addImageButton: {
    backgroundColor: '#E5E5EA',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
    minWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addImageText: {
    color: '#5A94E3',
    fontSize: 15,
    lineHeight: 19,
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#E5F0FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#44A39D',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  buttonDisable: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#5A94E3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

