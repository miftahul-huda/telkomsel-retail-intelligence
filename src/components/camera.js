import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { Image } from 'react-native';
import { Text } from 'native-base';

export default class Camera extends PureComponent {  
    
    constructor(props) {
        super(props);
        this.state = {
            takingPic: false,
            opacity: 0.5,
            text: 'bbb'
        };
    }

    takePicture = async () => {
        if (this.camera && !this.state.takingPic) {
    
          let options = {
            quality: 0.85,
            fixOrientation: true,
            forceUpOrientation: true,
          };
    
          this.setState({takingPic: true});
    
          try {
             const data = await this.camera.takePictureAsync(options);
             Alert.alert('Success', JSON.stringify(data));
          } catch (err) {
            Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
            return;
          } finally {
            this.setState({takingPic: false});
          }
        }
    }

    onPress()
    {
        //this.setState({ opacity: 1 })
        this.takePicture();
    }

    render() {
        return (
            <RNCamera 
            ref={ref => {
                this.camera = ref;
            }}
            captureAudio={false}
            style={{flex: 1}}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}>
                <TouchableOpacity onPress={this.onPress.bind(this)}
                style={{ position:'absolute', top: '85%', left:'40%', opacity: this.state.opacity }} >
                    <Image  source={require('../images/camarabutton.png')}></Image>
                </TouchableOpacity>
            </RNCamera>
        );
    }
}