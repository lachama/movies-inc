import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  desc: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  img: {
    width: 150,
    height: 250,
    marginBottom: 10,
    resizeMode: 'stretch',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  releaseText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  castList: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
  },
  cast: {
    fontSize: 16,
    marginTop: 3,
    marginBottom: 3,
  },
  castTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default styles;
