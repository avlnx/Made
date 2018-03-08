import React from 'react';
import {Container} from 'native-base';
import {getResetAndNavigateActionTo} from '../navigators/index';
import firebase from 'react-native-firebase';
import {NewPOSForm} from '../components/NewPosForm';
import actions from '../reducers/actions';
import {connect} from 'react-redux';

class NewPOSScreen extends React.Component {
  static navigationOptions = {
    title: 'Adicionar novo POS',
  };

  constructor() {
    super();
    this.state = {
      posSet: false,
      title: null,
      nickname: null,
    };
    // get a db reference
    this.db = firebase.firestore();
  }

  updateTitleInput(title) {
    this.setState({title});
  }

  updateNicknameInput(nickname) {
    this.setState({nickname});
  }

  addNewPOS() {
    // get user id
    const uid = firebase.auth().currentUser.uid;

    // Add new POS to firebase firestore
    const {title, nickname} = this.state;
    const posData = {title, nickname};

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
      // Set state so we know to alter this pos instead of creating a new
      // one should the user press the back button. Probably will need to sit
      // TODO: test if needs to be in redux store
      this.setState({posSet: true});
      // now navigate to add products to this POS that was just added
      this.props.navigation.navigate('AddProductsToPOS');
    }
  }

  componentWillUnmount() {
    this.setState({posSet: false});
  }

  render() {
    return (
        <Container>
          <NewPOSForm currentTitle={this.state.title}
                      currentNickname={this.state.nickname}
                      updateTitleInput={this.updateTitleInput.bind(this)}
                      updateNicknameInput={this.updateNicknameInput.bind(this)}
                      addPOSAction={this.addNewPOS.bind(this)}/>
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.ui.loading,
});

NewPOSScreen = connect(mapStateToProps)(NewPOSScreen);
export {NewPOSScreen};