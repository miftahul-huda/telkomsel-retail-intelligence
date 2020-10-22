import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, 
  CardItem, Left, View, Item, Input, Form, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class LoginPage extends Component {
  render(){
    return(
      <Container>
        <Header style={{backgroundColor: '#E51B24'}}>
          <Body>
            <Title style={ { width: '100%', textAlign: 'center' }}>Retail Intelligence</Title>
          </Body>
        </Header>
        <Content padder>

          <Image source={require('./images/telkomsel-logo.png')} 
          style={{ marginLeft: '16%', marginTop: '10%' }}></Image>
          
          <Form style={{ marginTop: '10%' }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true}/>
            </Item>
          </Form>

          <Button dark bordered style = {{alignSelf: 'center', margin: 30, 
          width: '100%', backgroundColor: '#E51B24'}}
            onPress= {() => {Actions.menuPage(); }}>
            <Text style={{ color: '#ffffff', width: '100%', textAlign: 'center' }}>Login</Text>
          </Button>

         </Content>
      </Container>
    );
  }
}
