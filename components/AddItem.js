import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={textValue => {
          setText(textValue);
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);

          setText('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20}></Icon>Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },

  btn: {
    backgroundColor: '#c2bad8',
    padding: 10,
    fontSize: 20,
  },

  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
