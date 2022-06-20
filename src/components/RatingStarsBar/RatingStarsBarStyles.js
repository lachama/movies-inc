import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingBarContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  StarImage: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    marginRight: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 65,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  pressableContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    // width: 100,
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 20,
    // borderRadius: 8,
    borderColor: 'gray',
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default styles;
