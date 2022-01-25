import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updatePassword} from '../../../store/reducers/authSlice';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

export default () => {
  const navigation = useNavigation();

  const [tryToSend, setTryToSend] = useState(false);
  const [antiga_senha, setAntiga_senha] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao_senha, setConfirmacao_senha] = useState('');

  const inputSenhaRef = useRef();
  const inputConfirmacaoSenhaRef = useRef();

  const {status, error} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onSubmit = () => {
    setTryToSend(true);

    if (
      !(antiga_senha && senha && confirmacao_senha) ||
      !(senha === confirmacao_senha)
    )
      return;

    const data = {old_senha: antiga_senha, new_senha: senha};

    dispatch(updatePassword(data));
  };

  const isLoading = () => status === 'loading';

  return (
    <ScrollView
      style={styles.pageContainer}
      disableScrollViewPanResponder={true}>
      <Text style={styles.title}>Alterar senha</Text>

      <Text style={styles.textInputLabel}>Antiga Senha</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="lock-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Insira a antiga senha"
          secureTextEntry
          returnKeyType="next"
          onChangeText={setAntiga_senha}
          value={antiga_senha}
          onSubmitEditing={() => inputSenhaRef.current.focus()}
        />
      </View>
      {tryToSend && antiga_senha === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

      <Text style={styles.textInputLabel}>Nova Senha</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="lock-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Crie uma nova senha"
          secureTextEntry
          returnKeyType="next"
          onChangeText={setSenha}
          value={senha}
          ref={inputSenhaRef}
          onSubmitEditing={() => inputConfirmacaoSenhaRef.current.focus()}
        />
      </View>
      {tryToSend && senha === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

      <Text style={styles.textInputLabel}>Confirme a Nova Senha</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="lock-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Confirme a nova senha"
          secureTextEntry
          onChangeText={setConfirmacao_senha}
          value={confirmacao_senha}
          ref={inputConfirmacaoSenhaRef}
          onSubmitEditing={onSubmit}
        />
      </View>
      {tryToSend && confirmacao_senha === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

      {tryToSend && senha !== confirmacao_senha && confirmacao_senha !== '' && (
        <Text style={styles.textError}>As senhas precisam ser iguais.</Text>
      )}

      <TouchableOpacity
        disabled={isLoading()}
        onPress={onSubmit}
        style={styles.button}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Alterar</Text>
        {isLoading() ? (
          <ActivityIndicator
            style={styles.buttonLoading}
            color={Colors.light}
          />
        ) : (
          <MIcon style={styles.buttonIcon} name="check" />
        )}
      </TouchableOpacity>

      <Text style={[styles.textError, {marginTop: 16}]}>{error}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.light,
  },
  title: {
    color: Colors.dark,
    fontSize: 24,
    fontWeight: '900',
    textTransform: 'capitalize',
    marginTop: 16,
  },
  textInputLabel: {
    color: Colors.gray,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputIcon: {
    position: 'absolute',
    top: 16,
    left: 12,
    fontSize: 24,
    color: Colors.dark,
    zIndex: 1,
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    color: Colors.dark,
    borderRadius: 16,
    paddingLeft: 48,
    paddingRight: 16,
    height: 56,
  },
  textError: {
    color: Colors.red,
    marginTop: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 24,
    backgroundColor: Colors.dark,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  buttonText: {
    color: Colors.light,
    fontSize: 16,
  },
  buttonIcon: {
    color: Colors.light,
    fontSize: 21,
    marginLeft: 8,
  },
  buttonLoading: {
    marginLeft: 8,
  },
});
