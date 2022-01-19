import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default () => {
  const navigation = useNavigation();

  const inputPasswordRef = useRef();

  return (
    <View style={styles.pageContainer}>
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
            onSubmitEditing={() => inputPasswordRef.current.focus()}
          />
        </View>

        <Text style={styles.textInputLabel}>Senha</Text>
        <View style={styles.textInputContainer}>
          <Icon style={styles.textInputIcon} name="lock-outline" />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={Colors.gray}
            placeholder="Digite a sua senha"
            secureTextEntry
            ref={inputPasswordRef}
            onSubmitEditing={() => navigation.goBack()}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Entrar</Text>
          <Icon style={styles.buttonIcon} name="arrow-forward" />
        </TouchableOpacity>
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
    </View>
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
