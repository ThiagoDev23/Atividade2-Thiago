import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



const DATA2 = [
  
  {
    
    image: 'https://i.pinimg.com/736x/af/41/fc/af41fc65f1fa2c145ff00106568afa39.jpg',
    text: ["Mundial:"],
    description: ["1x"],
  },
  {
    
    image: 'https://i.pinimg.com/736x/26/3e/09/263e09a8b6342b65bb8a8bd1f5dbfec5.jpg',
    text: ["Copa Libertadores:"],
    description: ["3x"],
  },
  {
    
    image: 'https://media.gettyimages.com/id/1434873773/pt/foto/rio-de-janeiro-brazil-the-trophy-is-displayed-prior-to-the-second-leg-match-of-the-final-of.jpg?s=612x612&w=0&k=20&c=f4sSzU1nBTWxv2fk1ByFQzkoyiJZoPyLNeqQZNmuobk=',
    text: ["Copa do Brasil:"],
    description: ["5x"],
  },
  {
    
    image: 'https://i.pinimg.com/736x/b3/3a/00/b33a0061f9cb893876fbf32b98520bfc.jpg',
    text: ["Brasileirão:"],
    description: ["8x"],
  },
  {
    
    image: 'https://64.media.tumblr.com/368a8c18d59ca3d1b4b5a267d83c68a5/69932c1a81634c09-0a/s1280x1920/8548570c4ff142b668510c2d52c24a8ce9781c72.pnj',
    text: ["Campeonato Carioca:"],
    description: ["39x"],
  },
];

const Card = ({image, text, description}) => {
  return(
      <View style={styles.card}>
        {image && <Image source={{ uri: image }} style={styles.source} />}
        {text && text.map((line, index) => <Text key={index} style={styles.title}>{line}</Text>)}
        {description && description.map((line, index) => <Text key={index} style={styles.description}>{line}</Text>)}
      </View>
  );
};

const Item = ({ title, description }) => {
  return(
  <View style={styles.item}>
    <Text style={styles.text}> {title}</Text>
    <Text style={styles.descrição}>{description}</Text>
  </View>
);
};
const App = () => (
  <SafeAreaProvider style={styles.fundo}>

      <SafeAreaView style={styles.container}>

      <Text style={styles.headerTitle}>Flamengo títulos</Text>
      <Image style={styles.image} source={{uri:'https://i.pinimg.com/736x/c7/06/b2/c706b2f7087cc2570cdeabac7e6ca54f.jpg'}}></Image>
        <Item title="História:" description="O Clube de Regatas do Flamengo, fundado em 17 de novembro de 1895, é um dos maiores e mais populares clubes do Brasil. Inicialmente criado para competições de remo, tornou-se uma potência no futebol, conquistando títulos nacionais e internacionais, incluindo múltiplos Campeonatos Brasileiros e a Copa Libertadores da América. Com uma torcida apaixonada, conhecida como a maior do país, o Flamengo tem como principais cores o vermelho e o preto e manda seus jogos no icônico estádio do Maracanã."/>

        <FlatList
          data={DATA2}
          renderItem={({ item }) => <Card image={item.image} text={item.text} description={item.description} />}
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
      height:  110,
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
        marginBottom: 80,
        color: 'black',
        marginLeft: 80,
        marginTop: -70,
        fontWeight: 'bold',        
    },
    descrição: {
        fontSize: 14,
        color: 'black',
        marginLeft: 4,
         
    },
    description: {
      fontSize: 16,
      color: 'black',
      marginLeft: 80,
      marginTop: -70,
   
  },
  text: {
    fontSize: 18,
    marginTop: 0,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold', 
    
  },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 2,
    },
    headerTitle: {
      color: 'white',
      fontSize: 25,
      margin: 10,
      fontWeight: 'bold', 
      marginLeft: 110,
      marginTop: -10,
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
      width: "95%",
      height: 305,
      borderRadius: 40,
      margin: 10,
      

      
    },
    source: {
      width: 70,
      height: 90,
      borderRadius: 30,
      marginTop: -13,
      marginLeft: -10,
      
    },
});

export default App;