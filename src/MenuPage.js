import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, 
  List,
  ListItem,
  Left,
  Item, CardItem, Icon } from 'native-base';

import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class MenuPage extends Component {
  render(){
    return(
      <Container>
        <Header style={{backgroundColor: '#E51B24'}}>
          <Body>
            <Title>Menu</Title>
          </Body>
        </Header>
        <Content padder>
        <List>
            <ListItem onPress= {() => {Actions.cameraPage(); }}>
              <Image source={require('./images/camera.png')}></Image>
              <Text style={{ marginLeft: '5%', fontWeight: 'bold' }}>Take Picture</Text>
            </ListItem>
            <ListItem>
              <Image source={require('./images/crop.png')}></Image>
              <Text style={{ marginLeft: '5%', fontWeight: 'bold' }}>Edit Picture</Text>
            </ListItem>
            <ListItem>
              <Image source={require('./images/upload.png')}></Image>
              <Text style={{ marginLeft: '5%', fontWeight: 'bold' }}>Upload</Text>
            </ListItem>
            <ListItem>
            <Image source={require('./images/history.png')}></Image>
              <Text style={{ marginLeft: '5%', fontWeight: 'bold' }}>Upload history</Text>
            </ListItem>
          </List>

          <Button style={ { marginTop: '10%' }} dark bordered
            onPress= {() => {Actions.pop(); }}>
            <Text>Back</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
