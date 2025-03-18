import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



const DATA2 = [
  
  {
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrd-9Bfj2QOtKuZ1HeKJ1oN1qOg1lqS3SWpA&s',
    text: ["kkkkkkkkkkk"],
  },
  {
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrd-9Bfj2QOtKuZ1HeKJ1oN1qOg1lqS3SWpA&s',
    text: ["kkkkkkkkkkk"],
  },
  {
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrd-9Bfj2QOtKuZ1HeKJ1oN1qOg1lqS3SWpA&s',
    text: ["kkkkkkkkkkk"],
  },
  {
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrd-9Bfj2QOtKuZ1HeKJ1oN1qOg1lqS3SWpA&s',
    text: ["kkkkkkkkkkk"],
  },
  {
    
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrd-9Bfj2QOtKuZ1HeKJ1oN1qOg1lqS3SWpA&s',
    text: ["kkkkkkkkkkk"],
  },
];

const Card = ({image, text}) => {
  return(
      <View style={styles.card}>
        {image && <Image source={{ uri: image }} style={styles.source} />}
        {text && text.map((line, index) => <Text key={index} style={styles.title}>{line}</Text>)}
      </View>
  );
};

const Item = ({ title, description }) => {
  return(
  <View style={styles.item}>
    <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrd-9Bfj2QOtKuZ1HeKJ1oN1qOg1lqS3SWpA&s'}}></Image>
    <Text style={styles.text}> {title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);
};
const App = () => (
  <SafeAreaProvider style={styles.fundo}>

      <SafeAreaView style={styles.container}>

      <Text style={styles.headerTitle}>Carros Esportivos!</Text>
        <Item title="testeeee" description="aaaaaaaaaaaaaaaaaa"/>

        <FlatList
          data={DATA2}
          renderItem={({ item }) => <Card image={item.image} text={item.text} />}
          keyExtractor={(item) => item.id}
          style={styles.flat}
        />

      </SafeAreaView>
    
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  fundo: {
      backgroundColor: 'black',
  },
  container: {
      flex: 1,
      alignItems: 'center',
    },
    card: {
      width: "98%",
      height:  100,
      padding:  20,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: 'gray',
      backgroundColor: 'white',
      marginTop: 10,
      margin: 4,
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        color: 'black',
        marginLeft: 100,
        marginTop: -70,        
    },
    description: {
        fontSize: 12,
        color: 'black',
         
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 2,
    },
    headerTitle: {
      color: 'white',
      fontSize: 25,
      margin: 10,
    },
    item: {
      backgroundColor: 'white',
      padding: 1,
      marginVertical: 8,
      marginHorizontal: 13,
      alignItems: 'left',
      width: "95%", 
      borderRadius: 10, 
      borderWidth: 3,
      borderColor: 'gray',
    },
  
    image: {
      width: "100%",
      height: 220,
      resizeMode: 'contain',
      borderRadius: 10,
      marginTop: 0,
      
    },
    text: {
      fontSize: 18,
      marginTop: 5,
      color: '#333',
      textAlign: 'left',
      
    },
    source: {
      width: 70,
      height: 70,
      borderRadius: 35,
      marginTop: -7,
      
    },
    flat: {
      paddingTop: 20,
    },
});

export default App;