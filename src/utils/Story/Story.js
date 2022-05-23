import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Left, Icon, Button, Body, Right, Title } from 'native-base';
import StoriesData from '../Stories';

const Story = (props) => {
    const { openDrawer } = props
    return (
        <Container>
            <Header hasTabs>
                <Left>
                    <Button icon onPress={openDrawer} transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title> Instagram</Title>
                </Body>
                <Right />
            </Header>

            <Content>
                <Stories />
            </Content>
        </Container>

    )
  
}

export default Story