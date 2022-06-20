import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import styles from './RatingStarsBarStyles';
import {setMovieRating} from '../../data/Api';
import {Constants} from '../../utils/constants';

const AlertMessage = textMsg => {
  return Alert.alert(Constants.MESSAGE, textMsg, [
    {
      text: Constants.CANCEL,
      onPress: () => console.log(Constants.CANCEL_PRESSED),
      style: 'cancel',
    },
    {text: Constants.OK, onPress: () => console.log(Constants.OK_PRESSED)},
  ]);
};

const RatingStarsBar = ({avgVote = 0, movieId}) => {
  const [defaulRating, setDefaultRating] = useState(avgVote);
  const [maxRating] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [modalVisible, setModalVisible] = useState(false);
  const [rateValue, setRateValue] = React.useState('');

  const starImgFilled = Constants.START_IMG_FILLED;
  const starImgBorder = Constants.START_IMG_BORDER;

  useEffect(() => {
    setDefaultRating(avgVote);
  }, [avgVote]);

  const onRateValueChange = val => {
    const newVal = val;
    if (Number(newVal) > 10) {
      setRateValue('');
    } else {
      setRateValue(val);
    }
  };

  const setNewRateValue = () => {
    if (rateValue) {
      setMovieRating().then(data => {
        if (data.status_code !== 1) {
          setDefaultRating(avgVote);
          setRateValue('');
          AlertMessage(data.status_message);
        } else {
          setDefaultRating(rateValue);
          setRateValue(rateValue);
          AlertMessage(Constants.RATED_SUCCESSFULLY);
        }
      });
    }
  };

  const RatingStars = () => {
    return (
      <View style={styles.ratingBarContainer}>
        {maxRating.map((item, idx) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
                setModalVisible(!modalVisible);
                setRateValue(item);
                onRateValueChange(item);
              }}>
              <Image
                style={styles.StarImage}
                source={
                  item <= defaulRating
                    ? {uri: starImgFilled}
                    : {uri: starImgBorder}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.childView}>
        <RatingStars />
      </View>
      <Text style={styles.text}>
        {defaulRating} / {maxRating.length} {Constants.RATINGS}
      </Text>
      <Button
        onPress={() => {
          setModalVisible(true);
          setRateValue('');
        }}
        title={Constants.RATE}
        color="#841584"
        accessibilityLabel={Constants.RATE_MOVIE}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{Constants.RATE_MOVIE}</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                onRateValueChange(text);
              }}
              value={String(rateValue)}
              keyboardType="decimal-pad"
              maxLength={3}
            />
            <View style={styles.pressableContainer}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={setNewRateValue}>
                <Text style={styles.textStyle}>{Constants.RATE}</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>{Constants.CLOSE}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RatingStarsBar;
