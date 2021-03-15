import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 160,
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  containerLong: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 330,
    marginBottom: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  containerTitle: {
    width: '100%',
    height: '100%',
    padding: 15,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#fff',
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 12,
    color: '#f0f0f0'
  },
  background: {
    position: 'absolute',
    opacity: 0.15,
    height: '100%',
    width: '100%',
    resizeMode: 'repeat'
  },

  colorAccessories:{
    backgroundColor: '#931ca0',
  },
  accessories:{
    position: 'absolute',
    bottom: 5,
    width: 80,
    height: 100,
  },

  colorBag:{
    backgroundColor: '#e8b4ef',
  },
  bag:{
    position: 'absolute',
    bottom: 10,
    width: 90,
    height: 120,
  },

  colorClothes:{
    backgroundColor: '#d670e1',
  },
  clothes:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 225,
  },

  colorShoes:{
    backgroundColor: '#e097e9',
  },
  shoes:{
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 225,
  },

  colorWomenclothes:{
    backgroundColor: '#cc37d8',
  },
  womenclothes:{
    position: 'absolute',
    bottom: 0,
    right: 20,
    width: 175,
    height: 125,
  },
})

export default style;