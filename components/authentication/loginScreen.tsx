import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FM_Button from '../coreComponents/buttonComponent';

export default class AuthenticationLoginScreen extends React.Component {

  private styles: any;

  constructor(props: any) {
    super(props);

    this.styles = StyleSheet.create({
      screenLayoutWrapper: {
        width: "100%",
        height: "100%",
        flexDirection: 'column'
      },

      textContentWrapper: {
        width: "100%",
        padding: 15,
        flex: 2
      },

      textLeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 25
      },

      textSecondary: {
        fontSize: 15,
        marginTop: 5,
        color: 'rgba(0,0,0,0.6)'
      },

      smsInputWrapper: {
        width: "100%",
        flex: 2,
        padding: 15,
        paddingBottom: 50,

        justifyContent: "flex-end", 
      },

      smsInput: {
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.6)',

        padding: 2.5,
        height: 40,
        borderRadius: 6,
        paddingStart: 15
      }
    });

  }

  render() {
    return (
      <SafeAreaView>
        <View style={this.styles.screenLayoutWrapper}>
          <View style={this.styles.textContentWrapper}>
            <Text style={this.styles.textLeading}>Please enter your number to sign into this app.</Text>
            <Text style={this.styles.textSecondary}>We will send you an SMS message.</Text>
          </View>

          <View style={this.styles.smsInputWrapper}>
            <TextInput style={this.styles.smsInput} placeholder="Enter yout 6 digit code." />
            <FM_Button onPress={() => {}} width="100%" paddingTop={15} text="VERIFY" />
          </View>
        </View>
      </SafeAreaView>
    );
  }

}