import React from 'react';
import {
  Container,
  Content,
  H1,
  H2,
  H3,
  Button,
  Text,
  Footer,
  FooterTab,
  Icon,
  View,
  Grid,
  Row,
} from 'native-base';
import actions from '../reducers/actions';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import {FullContent, SmallText} from '../components/common';
import {LoadPosForm} from '../components';
import {getResetAndNavigateActionTo} from '../navigators';

class OnboardingScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      nickname: null,
    };
    // get a db reference
    this.db = firebase.firestore();
  }

  updateNicknameInput(nickname) {
    this.setState({nickname});
  }

  addNewPOS() {
    // get user id
    const uid = firebase.auth().currentUser.uid;

    // Add new POS to firebase firestore
    const {nickname} = this.state;
    const posData = {nickname};

    // start loading
    const {dispatch} = this.props;
    dispatch(actions.ui.startLoading());

    const docRef = this.db.collection('users').
        doc(uid).
        collection('pos').
        add(posData).
        then(function(docRef) {
          console.log('New POS successfully written with id: ' + docRef.id);
          return docRef;
        }).
        catch(function(error) {
          console.error('Error adding POS: ', error);
          // dispatch(actions.ui.stopLoading());
          alert(error);
          return false;
        });

    dispatch(actions.ui.stopLoading());
    if (docRef) {
      // now reset navigation to the dashboard to activate the pos that was just added
      const navAction = getResetAndNavigateActionTo('Dashboard');
      this.props.navigation.dispatch(navAction);
      // this.props.navigation.navigate('Dashboard')
    }
  }

  render() {
    return (
        <Container>
          <FullContent style={{justifyContent: 'center', alignItems: 'center'}}>
            <H1>Escolha um apelido para o seu novo ponto de vendas</H1>
            <View style={{marginBottom: 40}}>
              <LoadPosForm
                  currentNickname={this.state.nickname}
                  updateNicknameInput={this.updateNicknameInput.bind(this)}
                  addPOSAction={this.addNewPOS.bind(this)}/>
            </View>
            <H2>Agora escolha um template para seu novo pos</H2>
            <SmallText>Os produtos, preços e quantidades inicias serão copiados do template escolhido.</SmallText>
          </FullContent>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.ui.loading
});

OnboardingScreen = connect(mapStateToProps)(OnboardingScreen);

export {OnboardingScreen};