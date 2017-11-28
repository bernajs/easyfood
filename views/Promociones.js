import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { Container, Body, Content, Header, Title, Text } from 'native-base'
import { connect } from 'react-redux'
import { get_promociones } from '../actions'

class Promociones extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.get_promociones()
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Promociones</Title>
          </Body>
        </Header>
        <Content>
          <Text>Soy el div de las promociones</Text>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps({ promociones }) {
  return { promociones }
}

export default connect(mapStateToProps, { get_promociones })(Promociones)
