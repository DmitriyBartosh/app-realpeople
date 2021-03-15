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

  colorCosmetic:{
    backgroundColor: '#fc92b6',
  },
  cosmetic:{
    position: 'absolute',
    bottom: 0,
    width: 150,
    height: 225,
  },

  colorEyelashes:{
    backgroundColor: '#ff6794',
  },
  eyelashes:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 125,
    height: 125,
  },

  colorMakeup:{
    backgroundColor: '#ffb9c3',
  },
  makeup:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 150,
    height: 210,
  },

  colorManicure:{
    backgroundColor: '#ff9dae',
  },
  manicure:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 130,
    height: 110,
  },

  colorMassage:{
    backgroundColor: '#ffc5d6',
  },
  massage:{
    position: 'absolute',
    right: 0,
    width: 200,
    height: 140,
  },
})

export default style;