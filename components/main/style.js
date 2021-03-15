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
  beauty: {
    position: 'absolute',
    bottom: -50,
    width: '100%',
    height: 150,
  },
  colorBeauty: {
    backgroundColor: '#ff6794',
  },
  eat: {
    position: 'absolute',
    width: '125%',
    height: 200,
  },
  colorEat: {
    backgroundColor: '#f35000',
  },
  auto: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 150,
  },
  colorAuto: {
    backgroundColor: '#ffcb33',
  },
  home: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 190,
  },
  colorHome: {
    backgroundColor: '#00b45a',
  },
  cloth: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    width: 115,
    height: 150,
  },
  colorCloth: {
    backgroundColor: '#d670e1',
  },
  holidays: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  colorHolidays: {
    backgroundColor: '#f92405',
  },
  education: {
    position: 'absolute',
    bottom: 50,
    width: 135,
    height: 155,
  },
  colorEducation: {
    backgroundColor: '#4169e1',
  },
  motion: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  colorMotion: {
    backgroundColor: '#48d1cc',
  }
})

export default style;