import { StyleSheet } from 'react-native'

const styleContainer = StyleSheet.create({
  noActive: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    width: '100%',
    height: '100%',
    zIndex: 100,
  },

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
})

export default styleContainer;