import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Promociones extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <View>
        <Text>Promociones</Text>
      </View>
    )
  }
}

function mapStateToProps({ promociones }) {
  return { promociones }
}

export default connect(mapStateToProps)(Promociones)
