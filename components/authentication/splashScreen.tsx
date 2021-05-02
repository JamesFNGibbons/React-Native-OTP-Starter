import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Switch, TextInput, ActivityIndicator, KeyboardAvoidingView, KeyboardAvoidingViewBase, Button, Animated, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FM_Button from './../coreComponents/buttonComponent';

interface SplashScreenProps {
  navigation: any
}

class AuthenticationSplashScreen extends React.Component<SplashScreenProps> {

  private styles: any;

  constructor(props: any) {
    super(props);
  
    // console.log(props);

    // this.fadeInAnimation = new Animated.Value(0);

    // Animated.spring(
    //   this.fadeInAnimation,
    //   {
    //     toValue: 1,
    //     velocity: 3,
    //     tension: 2,
    //     friction: 8,
    //     useNativeDriver: true
    //   }
    // ).start();

    this.styles = StyleSheet.create({
      wrapper: {
        width: "100%",
        height: "100%",
    
        flexDirection: "column",
      },
    
      logoWrapper: {
        flex: 2,
        alignContent: 'flex-start',
        justifyContent: 'center',
    
        backgroundColor: 'snow'
      },
    
      logoImage: {
        width: 200,
        alignSelf: 'center',
        flex: 5
      },
  
    
      formWrapper: {
        flex: 1,
        width: "100%",
        height: 250,

        backgroundColor: '#f5f5f5',
        padding: 25,
    
        // borderTopColor: "black",
        // borderTopWidth: 0.5
      },

      formButtonWrapper: {
        height: "100%",
        justifyContent: 'center'
      }
    });

    
  }

  /**
   *
   *
   * @private
   * @memberof AuthenticationSplashScreen
   */
  public Event_loginButtonTap = (): void => {
    this.props.navigation.navigate('Login');
  }

  render() {
   return (
     <SafeAreaView style={this.styles.wrapper}>
      <View style={this.styles.logoWrapper}>
        <Image
          source={require('./../../assets/logo.png')}
          style={this.styles.logoImage}
     
          resizeMode='contain'
        />
      </View>

      <View style={this.styles.formWrapper}>
        <View style={this.styles.formButtonWrapper}>
          <FM_Button onPress={this.Event_loginButtonTap} width='100%' text='LOGIN'></FM_Button>
          <FM_Button paddingTop={25/2} onPress={() => {}} width='100%' text='REGISTER'></FM_Button>
        </View>
      </View>
    </SafeAreaView>
   );
  }
}

export default AuthenticationSplashScreen;
