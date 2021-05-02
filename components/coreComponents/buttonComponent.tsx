import React from 'react';
import {StyleProp, ViewStyle, StyleSheet, Text, TouchableOpacity, View, Switch, TextInput, ActivityIndicator, KeyboardAvoidingView, KeyboardAvoidingViewBase, Button, TouchableHighlight, TouchableHighlightBase } from 'react-native';

interface FM_Generic_Button {
  onPress: any,
  width?: number | string,
  height?: number | string,
  text: string, 

  paddingTop?: number | string,
  paddingBottom?: number | string,

  colour?: string,
  fontColour?: string
}

export var FM_BTN_PRIMARY = 'yellow';
export var FM_BTN_TEXT_PRIMARY = 'black';

export default class FM_Button extends React.Component <FM_Generic_Button> {

  private styles: any;

  /**
   * Creates an instance of FM_Button.
   * @param {*} props
   * @memberof FM_Button
   */
  constructor(props: any) {
    super(props);


    this.styles = StyleSheet.create({
      buttonWrap: {
        alignSelf: 'flex-start',
        width: this.props.width,

        paddingBottom: this.props.paddingBottom,
        paddingTop: this.props.paddingTop
      },

      buttonTextWrap: {
        backgroundColor: this.props.colour? this.props.colour: FM_BTN_PRIMARY,
        borderRadius: 12,

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,

        width: "100%"
      },

      buttonText: {
        textAlign: 'center',
        color: this.props.fontColour? this.props.fontColour: FM_BTN_TEXT_PRIMARY,
      }
    });
  }

  /**
   *
   *
   * @private
   * @return {*}  {StyleProp<ViewStyle>}
   * @memberof FM_Button
   */
  private getButtonStyles(): StyleProp<ViewStyle> {
    return this.styles.buttonWrap;
  }
  
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress} 
        style={
          this.styles.buttonWrap
        }
        activeOpacity={0.1}
      >
        <View style={this.styles.buttonTextWrap}>
          <Text style={this.styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}