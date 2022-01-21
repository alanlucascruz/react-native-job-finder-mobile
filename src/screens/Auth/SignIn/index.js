import React, {Fragment, useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../../store/reducers/authSlice';

export default () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {error, status} = useSelector(state => state.auth);

  const [tryToSend, setTryToSend] = useState(false);
  const [email, setEmail] = useState('alan@gmail.com');
  const [senha, setSenha] = useState('123456');
  const inputPasswordRef = useRef();

  const onSubmit = useCallback(() => {
    setTryToSend(true);

    if (!(email && senha)) return;

    const data = {email, senha};

    dispatch(signIn(data));
  }, [email, senha]);

  const isLoading = () => status === 'loading';

  return (
    <SafeAreaView style={styles.pageContainer}>
      <StatusBar backgroundColor={Colors.light} />

      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Por favor, entre para continuar.</Text>

        <Text style={styles.textInputLabel}>E-mail</Text>
        <View style={styles.textInputContainer}>
          <Icon style={styles.textInputIcon} name="mail-outline" />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={Colors.gray}
            placeholder="Digite o seu e-mail"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={setEmail}
            value={email}
            onSubmitEditing={() => inputPasswordRef.current.focus()}
          />
        </View>
        {tryToSend && email === '' && (
          <Text style={styles.textError}>Campo obrigatório</Text>
        )}

        <Text style={styles.textInputLabel}>Senha</Text>
        <View style={styles.textInputContainer}>
          <Icon style={styles.textInputIcon} name="lock-outline" />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={Colors.gray}
            placeholder="Digite a sua senha"
            secureTextEntry
            onChangeText={setSenha}
            value={senha}
            ref={inputPasswordRef}
            onSubmitEditing={onSubmit}
          />
        </View>
        {tryToSend && senha === '' && (
          <Text style={styles.textError}>Campo obrigatório</Text>
        )}

        <TouchableOpacity
          disabled={isLoading()}
          style={styles.button}
          activeOpacity={0.7}
          onPress={onSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
          {isLoading() ? (
            <ActivityIndicator
              style={styles.buttonLoading}
              color={Colors.light}
            />
          ) : (
            <Icon style={styles.buttonIcon} name="arrow-forward" />
          )}
        </TouchableOpacity>

        <Text style={[styles.textError, {marginTop: 16}]}>{error}</Text>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.textSignUp}>Não tem uma conta? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          activeOpacity={0.6}
          hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
          <Text style={styles.textSignUpLink}>Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.light,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: Colors.dark,
    fontSize: 42,
    fontWeight: '900',
  },
  subtitle: {
    color: Colors.gray,
    fontWeight: '500',
    marginBottom: 36,
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
  textError: {
    color: Colors.red,
    marginTop: 2,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  textSignUp: {
    color: Colors.gray,
    fontSize: 16,
  },
  textSignUpLink: {
    color: Colors.dark,
    fontWeight: '500',
    fontSize: 16,
  },
});
