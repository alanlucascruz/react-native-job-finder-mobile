import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
  const navigation = useNavigation();

  const inputProfissaoRef = useRef();
  const inputWhatsAppRef = useRef();
  const inputLinkRef = useRef();
  const inputEmailRef = useRef();
  const inputSenhaRef = useRef();
  const inputConfirmSenhaRef = useRef();

  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.title}>Criar conta</Text>

      <Text style={styles.textInputLabel}>Nome</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="person-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite o seu nome"
          returnKeyType="next"
          onSubmitEditing={() => inputProfissaoRef.current.focus()}
        />
      </View>

      <Text style={styles.textInputLabel}>Profissão</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="work-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite a sua profissão"
          returnKeyType="next"
          ref={inputProfissaoRef}
          onSubmitEditing={() => inputWhatsAppRef.current.focus()}
        />
      </View>

      <Text style={styles.textInputLabel}>WhatsApp</Text>
      <View style={styles.textInputContainer}>
        <MCIcon style={styles.textInputIcon} name="whatsapp" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite o seu número do WhatsApp"
          keyboardType="phone-pad"
          returnKeyType="next"
          ref={inputWhatsAppRef}
          onSubmitEditing={() => inputLinkRef.current.focus()}
        />
      </View>

      <Text style={styles.textInputLabel}>Link Portfólio (Opcional)</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="link" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite um link para o seu portfólio"
          returnKeyType="next"
          ref={inputLinkRef}
          onSubmitEditing={() => inputEmailRef.current.focus()}
        />
      </View>

      <Text style={styles.textInputLabel}>E-mail</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="mail-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite o seu e-mail"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          ref={inputEmailRef}
          onSubmitEditing={() => inputSenhaRef.current.focus()}
        />
      </View>

      <Text style={styles.textInputLabel}>Senha</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="lock-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Crie uma sua senha"
          secureTextEntry
          returnKeyType="next"
          ref={inputSenhaRef}
          onSubmitEditing={() => inputConfirmSenhaRef.current.focus()}
        />
      </View>

      <Text style={styles.textInputLabel}>Confirme a Senha</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="lock-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Confirme a sua senha"
          secureTextEntry
          ref={inputConfirmSenhaRef}
          onSubmitEditing={() => navigation.goBack()}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Cadastrar</Text>
        <MIcon style={styles.buttonIcon} name="arrow-forward" />
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.textSignUp}>Já tem uma conta? </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}>
          <Text style={styles.textSignUpLink}>Faça Login</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 36,
    paddingBottom: 24,
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
