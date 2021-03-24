import React, {useCallback} from 'react'
import { View, StyleSheet, Text, FlatList, Linking, TouchableWithoutFeedback, Dimensions } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapDarkStyle from '../../data/map'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const OpenURL = ({ url, iconName, title, styleIcon }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {

      await Linking.openURL(url);

    } else {

      Alert.alert(`Don't know how to open this URL: ${url}`);
    }

  }, [url]);

  return <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.iconContainer}>
        <View style={[styles.icon, styleIcon]}>
          <FontAwesomeIcon name={iconName} style={styles.iconImg} size={ 25 } color='white'/>
        </View>
        <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
      </View>
      </TouchableWithoutFeedback>;
};

const contact = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.linkContainer}>
    <FlatList 
    horizontal
    data={props.data}
    renderItem={item => item.key}
    renderItem={({item}) => {
      if(item.title === 'Instagram'){
      return <View>
        <OpenURL url={item.link} iconName={'instagram'} title={item.title} styleIcon={styles.instagram}/>
      </View>
      }
      else if(item.title === 'Сайт'){
        return <View>
          <OpenURL url={item.link} iconName={'chrome'} title={item.title} styleIcon={styles.site}/>
        </View>
      }
      else if(item.title === 'Viber'){
        return <View>
          <OpenURL url={item.link} iconName={'viber'} title={item.title} styleIcon={styles.viber}/>
        </View>
      }
      else if(item.title === 'Whatsapp'){
        return <View>
          <OpenURL url={item.link} iconName={'whatsapp'} title={item.title} styleIcon={styles.whatsapp}/>
        </View>
      }
      else if(item.title === 'Telegram'){
        return <View>
          <OpenURL url={item.link} iconName={'telegram'} title={item.title} styleIcon={styles.telegram}/>
        </View>
      }
      else if(item.title === 'Звонок'){
        return <View>
          <OpenURL url={item.link} iconName={'mobile-alt'} title={item.title} styleIcon={styles.phone}/>
        </View>
      }
      else if(item.title === 'Почта'){
        return <View>
          <OpenURL url={item.link} iconName={'envelope-open-text'} title={item.title} styleIcon={styles.mail}/>
        </View>
      }
      else if(item.title === 'Вконтакте'){
        return <View>
          <OpenURL url={item.link} iconName={'vk'} title={item.title} styleIcon={styles.vk}/>
        </View>
      }
    }}
    />
    </View>

    <FlatList 
      data={props.data}
      renderItem={item => item.key}
      renderItem={({item}) => {
      if(item.map){
      return <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapDarkStyle}
        initialRegion={item.coordinate}
      >
      <Marker
        title={item.title}
        description={item.description}
        coordinate={item.coordinate}
        icon={require('../../assets/img/icon/map.png')}
      />
      </MapView>
      }
    }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkContainer:{
    paddingTop: 20,
    paddingBottom: 40,
  },
  instagram: {
    backgroundColor: 'rgb(131, 58, 180)',
    borderRadius: 25,
  },
  site:{
    backgroundColor: 'rgb(153, 0, 0)',
    borderRadius: 25,
  },
  vk: {
    backgroundColor: 'rgb(77, 113, 152)',
    borderRadius: 25,
  },
  telegram: {
    backgroundColor: 'rgb(0, 136, 204)',
    borderRadius: 25,
  },
  viber: {
    backgroundColor: 'rgb(102, 92, 172)',
    borderRadius: 25,
  },
  whatsapp: {
    backgroundColor: 'rgb(67, 216, 84)',
    borderRadius: 25,
  },
  phone: {
    backgroundColor: 'rgb(0, 230, 0)',
    borderRadius: 25,
  },
  mail: {
    backgroundColor: 'rgb(30, 136, 229)',
    borderRadius: 25,
  },
  iconContainer: {
    alignItems: 'center',
    width: 80,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    padding: 8,
    borderRadius: 25,
    marginBottom: 5,
  },
  map: {
    height: HEIGHT - 275,
    width: WIDTH,
    zIndex: 100
  }
})

export default contact;