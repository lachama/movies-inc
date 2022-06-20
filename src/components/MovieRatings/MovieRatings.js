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
import styles from './MovieRatingsStyles';
import {setMovieRating} from '../../data/api';
import {constants} from '../../utils/constants';

const AlertMessage = textMsg => {
  return Alert.alert(constants.MESSAGE, textMsg, [
    {
      text: constants.CANCEL,
      onPress: () => console.log(constants.CANCEL_PRESSED),
      style: 'cancel',
    },
    {text: constants.OK, onPress: () => console.log(constants.OK_PRESSED)},
  ]);
};

const MovieRatings = ({avgVote = 0, movieId}) => {
  const [defaulRating, setDefaultRating] = useState(avgVote);
  const [maxRating] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [modalVisible, setModalVisible] = useState(false);
  const [rateValue, setRateValue] = React.useState('');

  const starImgFilled = constants.START_IMG_FILLED;
  const starImgBorder = constants.START_IMG_BORDER;

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
          AlertMessage(constants.RATED_SUCCESSFULLY);
        }
      });
    }
  };

  const RatingStarsIcon = () => {
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
        <RatingStarsIcon />
      </View>
      <Text style={styles.text}>
        {defaulRating} / {maxRating.length} {constants.RATINGS}
      </Text>
      <Button
        onPress={() => {
          setModalVisible(true);
          setRateValue('');
        }}
        title={constants.RATE}
        color="#841584"
        accessibilityLabel={constants.RATE_MOVIE}
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
            <Text style={styles.modalText}>{constants.RATE_MOVIE}</Text>
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
                <Text style={styles.textStyle}>{constants.RATE}</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>{constants.CLOSE}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MovieRatings;
