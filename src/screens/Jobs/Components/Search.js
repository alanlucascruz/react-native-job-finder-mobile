import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {getJobsRequest, setFilter} from '../../../store/reducers/jobSlice';

export default () => {
  const [filter, onChangeFilter] = useState('');

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(setFilter(filter));
    dispatch(getJobsRequest('filtering'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontre Sua Vaga dos Sonhos</Text>

      <View style={styles.inputTextContainer}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Encontre sua vaga agora"
          onChangeText={onChangeFilter}
          value={filter}
          onSubmitEditing={onSearch}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={onSearch}>
          <Icon name="search" color={Colors.light} size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginVertical: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: Colors.dark,
  },
  inputTextContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    color: Colors.dark,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
    borderRadius: 16,
    marginLeft: 8,
    width: 56,
  },
});
