## Dependências

> npm i @react-navigation/native react-native-screens react-native-safe-area-context npm install @react-navigation/stack react-native-gesture-handler @react-navigation/bottom-tabs react-native-linear-gradient react-native-vector-icons @reduxjs/toolkit react-redux redux-saga axios @react-native-async-storage/async-storage react-native-masked-text

## Rodar no Android

> npx react-native run-android

## Rodar o Metro Bundler

> npx react-native start

## Conectar o Metro Bundler no celular:

Chacoalhe o celular, vá em "Change Bundle Location" e indique a o IP do seu computador seguido da porta 8081. Para isso é preciso que ambos os dispositivos estejam conectados na mesma rede.

### Gerar APK

> cd android && gradlew bundleRelease

### Testar APK

> npx react-native run-android --variant=release

### Resolução de Erros

- Erro: Execution failed for task ':app:mergeDebugShaders'. Unable to delete file...

  - Abra o CMD como administrador, navegue até o projeto e rode o comando cd android && gradlew clean
