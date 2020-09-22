import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
  {
    id: '2',
    title: 'Second Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
  {
    id: '3',
    title: 'Third Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
  {
    id: '4',
    title: 'Third Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
  {
    id: '5',
    title: 'Third Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
  {
    id: '6',
    title: 'Third Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
  {
    id: '7',
    title: 'Third Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
  {
    id: '8',
    title: 'Third Item',
    text: 'test',
    image: require('./img/1.jpg')
  },
];

const Item = ({ title, text, image }) => (

  <View style={styles.item}>
    <Image source={image} style={styles.image}></Image>
    <View style={{ alignItems: "left", flex: 1 }}>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
    <TouchableOpacity>
      <TouchableOpacity style={{ height: 50, width: 70, justifyContent: "center", alignItems: "left" }}>
        <Text style={{ color: "green" }}>AddToCart</Text>
      </TouchableOpacity>
    </TouchableOpacity>

  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}
      text={item.text}
      image={item.image}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60
  },
  item: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100
  },
});

export default App;