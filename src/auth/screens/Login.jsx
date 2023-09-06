import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View>
      <Text style={style.logintxt}>Log in</Text>
      <Text style={style.welcometxt}>Hi! Welcome</Text>
      <View style={style.form}>
        <View style={style.inputParent}>
          <Text style={style.inputTxt}>Email Address</Text>
          <TextInput defaultValue="Enter Your Email" style={style.input} />
        </View>
        <View style={style.inputParent}>
          <Text style={style.inputTxt}>Password</Text>
          <TextInput defaultValue="Enter Your Password" style={style.input2} />
        </View>
        <View style={style.hr} />
        <TouchableOpacity style={style.buttonP}>
          <View style={style.button}>
            <Text style={style.buttonText}>Log In</Text>
          </View>
        </TouchableOpacity>
        <Text style={style.forgotText}>Forgotten your password ?</Text>
        <View style={style.underforget}>
          <View style={style.hr2} />
          <Text style={style.underforgetText}>Or sign in with</Text>
          <View style={style.hr2} />
        </View>
        <View style={style.imgs}>
          <Image source={require('../../../assets/images/apple.png')} />
          <Image source={require('../../../assets/images/google.png')} />
          <Image source={require('../../../assets/images/fb.png')} />
        </View>
        <Text style={style.slText}>Don’t have an account ?</Text>
        <Text style={style.lText}>Create an Account</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  logintxt: {
    marginTop: 64,
    textAlign: 'center',
    fontSize: 20,
    color: '#14304A',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  welcometxt: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 22,
    color: '#C4C4C4',
    fontFamily: 'Poppins-Regular',
  },
  inputTxt: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#14304A',
    fontWeight: '600',
  },
  inputParent: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 20,
  },
  form: {
    marginTop: 72,
  },
  input: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#C4C4C4',
  },
  input2: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#C4C4C4',
    borderBottomWidth: 1,
    borderBottomColor: '#CFCFCF',
  },
  hr: {
    marginVertical: 5,
    width: '90%',
    marginLeft: '5%',
  },

  button: {
    backgroundColor: '#41C485',
    padding: 10,
    borderRadius: 5,
    borderRadius: 32,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
  buttonP: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 23,
    height: 56,
  },
  forgotText: {
    textAlign: 'center',
    marginTop: 21,
    color: '#14304A',
    fontFamily: 'Inter-SemiBold',
  },
  underforget: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginLeft: '5%',
    marginTop: 15,
  },
  hr2: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    flex: 1,
  },
  underforgetText: {
    flex: 1,
    color: '#C4C4C4',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  imgs: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    justifyContent: 'center',
    marginTop: 32,
    gap: 21,
  },
  slText:{
    textAlign:'center',
    marginTop:30,
    fontSize:12,
    fontFamily:'Poppins-Medium',
    color:'#C4C4C4'
  },
  lText:{
    fontSize:12,
    color:'#41C485',
    fontFamily:'Poppins-Bold',
    textAlign:'center'
  },
});
