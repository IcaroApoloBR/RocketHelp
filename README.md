![cover](.github/cover.gif?style=flat)


## Projeto
Aplicativo de chamados internos de uma empresa, solicitações de manutenção e suporte de equipamentos, gerência de chamados em tempo real. 

## Funcionalidades

- Autenticação de usuários através do cadastro no Firebase
- Criar novas solicitações
- Filtrar solicitações pelo status abertos e finalizados.
- Encerrar solicitação com uma breve descrição da solução e data.
- Sincronização com banco de dados em tempo real.

## 🚀 Tecnologias:

- **[React Native](https://reactnative.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Expo Bare Workflow](https://docs.expo.dev/bare/exploring-bare-workflow/)**

## 📚 Bibliotecas:

- **[Native Base](https://nativebase.io/)**
- **[React Native Firebase](https://rnfirebase.io/)**
- **[React Navigation](https://reactnavigation.org/)**
- **[Phosphor Icons](https://github.com/duongdev/phosphor-react-native)**
- **[React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**

## 🧠 Aprendizado:

- **Expo Bare Workflow** que nos permite adicionar código nativo (Android e iOS) sem perder as facilidades do Expo e utilização de **TypeScript** no desenvolvimento com tipagens.
- **Native Base** utilizado para criação das interface, uma biblioteca de componentes muito popular pela comunidade.
- Foi utilizado o ```expo prebuild```, neste ponto não era mais possível usar o aplicativo Expo Go devido a introdução do **Firebase** na qual utilizamos código nativo. Porém, com alguns recursos do Expo, uso de plugins para automatizar a implementação desses códigos.

## 🧪 Utilização:

Você pode utilizar esse app em sua máquina, fazendo um clone do projeto:   
```bash 
git clone https://github.com/IcaroApoloBR/RocketHelp.git   
```
Depois execute as seguintes ações de linha de comando:
```bash
cd rockethelp
npm install
```
NOTA: Por motivos de segurança, foi retirado os arquivos de configuração do firebase *google-services.json* (android) e *GoogleService-Info.plist* (ios). Para testar, você deve baixar seus próprios arquivos de configuração em sua conta no [firebase](https://console.firebase.google.com/) registrando o aplicativo com o nome do pacote ```com.rockethelp```. 
Deixe os arquivos baixados, na raiz do projeto.   
Em seguida execute estes comandos:
```bash
expo prebuild
expo run:android ou expo run:ios
```
