import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 0, text: 'Milk'},
    {id: 1, text: 'good'},
    {id: 2, text: 'abc'},
    {id: 3, text: 'dnf'},
  ]);

  const deleteItem = id => {
    const remaining = items.filter(el => el.id !== id);
    setItems(remaining);
  };

  const addItem = text => {
    // empty string input then do nothing just return
    if (!text.trim()) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
      return;
    }
    setItems(prev => {
      return [{id: Math.random(), text}, ...prev];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem key={item.id} item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
