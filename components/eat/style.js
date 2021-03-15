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

  colorBurgers:{
    backgroundColor: '#e56d00',
  },
  burgers:{
    position: 'absolute',
    bottom: 0,
    width: 225,
    height: 120,
  },

  colorSweets:{
    backgroundColor: '#ff8429',
  },
  sweets:{
    position: 'absolute',
    bottom: 10,
    width: 70,
    height: 100,
  },

  colorCatering:{
    backgroundColor: '#fda157',
  },
  catering:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 150,
    height: 210,
  },

  colorFastfood:{
    backgroundColor: '#f35000',
  },
  fastfood:{
    position: 'absolute',
    right: 0,
    width: 120,
    height: 230,
  },

  colorProducts:{
    backgroundColor: '#ffac33',
  },
  products:{
    position: 'absolute',
    bottom: 0,
    width: 80,
    height: 120,
  },
})

export default style;