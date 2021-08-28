import { Component } from 'react'
import { View,Text,Image,Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () {
    console.log('componentWillMount',window)
   }

  componentDidMount () {
    console.log('componentDidMount')
   }

  componentWillUnmount () { 
    console.log('componentWillUnmount')
  }

  componentDidShow () { 
    console.log('componentDidShow')
   }

  componentDidHide () {
    console.log('componentDidHide')
   }

   componentDidUpdate(prevProps, prevState) {
     console.log('componentDidUpdate')
   }
   
  render () {
    console.log('render')
    return (
      <View>
        <View>测试12312</View>
        <Text>Hello world!</Text>
        <Image/>
        <Button type='primary'>测试1</Button>
      </View>
    )
  }
}
