import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../../store/reducers/authSlice';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../styles';

export default () => {
  const navigation = useNavigation();

  const [tryToSend, setTryToSend] = useState(false);
  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [link_portfolio, setLink_portfolio] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao_senha, setConfirmacao_senha] = useState('');

  const inputProfissaoRef = useRef();
  const inputWhatsappRef = useRef();
  const inputLinkRef = useRef();
  const inputEmailRef = useRef();
  const inputSenhaRef = useRef();
  const inputConfirmacaoSenhaRef = useRef();

  const {status, error} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onSubmit = () => {
    setTryToSend(true);

    if (
      !(
        nome &&
        profissao &&
        whatsapp &&
        link_portfolio &&
        email &&
        senha &&
        confirmacao_senha
      ) ||
      !(senha === confirmacao_senha)
    )
      return;

    const data = {nome, profissao, whatsapp, link_portfolio, email, senha};

    dispatch(signUp(data));
  };

  const isLoading = () => status === 'loading';

  return (
    <ScrollView
      style={styles.pageContainer}
      disableScrollViewPanResponder={true}>
      <Text style={styles.title}>Criar conta</Text>

      <Text style={styles.textInputLabel}>Nome</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="person-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite o seu nome"
          returnKeyType="next"
          onChangeText={setNome}
          value={nome}
          onSubmitEditing={() => inputProfissaoRef.current.focus()}
        />
      </View>
      {tryToSend && nome === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

      <Text style={styles.textInputLabel}>Profissão</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="work-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite a sua profissão"
          returnKeyType="next"
          onChangeText={setProfissao}
          value={profissao}
          ref={inputProfissaoRef}
          onSubmitEditing={() => inputWhatsappRef.current.getElement().focus()}
        />
      </View>
      {tryToSend && profissao === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

      <Text style={styles.textInputLabel}>WhatsApp</Text>
      <View style={styles.textInputContainer}>
        <MCIcon style={styles.textInputIcon} name="whatsapp" />
        <TextInputMask
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite o seu número do WhatsApp"
          keyboardType="phone-pad"
          returnKeyType="next"
          onChangeText={setWhatsapp}
          value={whatsapp}
          ref={inputWhatsappRef}
          onSubmitEditing={() => inputLinkRef.current.focus()}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
        />
      </View>
      {tryToSend && whatsapp === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

      <Text style={styles.textInputLabel}>Link Portfólio (Opcional)</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="link" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Digite um link para o seu portfólio"
          returnKeyType="next"
          autoCapitalize="none"
          onChangeText={setLink_portfolio}
          value={link_portfolio}
          ref={inputLinkRef}
          onSubmitEditing={() => inputEmailRef.current.focus()}
        />
      </View>
      {tryToSend && link_portfolio === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

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
          onChangeText={setEmail}
          value={email}
          ref={inputEmailRef}
          onSubmitEditing={() => inputSenhaRef.current.focus()}
        />
      </View>
      {tryToSend && email === '' && (
        <Text style={styles.textError}>Campo obrigatório</Text>
      )}

      <Text style={styles.textInputLabel}>Senha</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="lock-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Crie uma sua senha"
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

      <Text style={styles.textInputLabel}>Confirme a Senha</Text>
      <View style={styles.textInputContainer}>
        <MIcon style={styles.textInputIcon} name="lock-outline" />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={Colors.gray}
          placeholder="Confirme a sua senha"
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
        <Text style={styles.buttonText}>Cadastrar</Text>
        {isLoading() ? (
          <ActivityIndicator
            style={styles.buttonLoading}
            color={Colors.light}
          />
        ) : (
          <MIcon style={styles.buttonIcon} name="arrow-forward" />
        )}
      </TouchableOpacity>

      <Text style={[styles.textError, {marginTop: 16}]}>{error}</Text>

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
