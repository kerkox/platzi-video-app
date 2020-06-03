import React, { Component } from 'react'
import {
  FlatList,
  Text
} from 'react-native'

class SuggestionsList extends Component {
  render() {
    const list = [
      {
        title: 'paul',
        key:1
      },
      {
        title: 'Cortes',
        key:2
      }
    ]
    return (
      <FlatList 
      data={list}
      renderItem={({item}) => <Text>{item.title}</Text>}  />
    )
  }
}

export default SuggestionsList;
