import { Component } from 'react'
import { View,Text,Image,Button,Input } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello World',
      number:0,
      showView:false
    }
  }
  componentWillMount () {
    console.log('componentWillMount',window)
   }

  componentDidMount () {
    console.log('componentDidMount')
    setTimeout(()=>{
      this.setState({
        text:'ceshi1231231'
      })
    },2000)
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
   
   onAdd = () => {
     this.setState({
       showView:!this.state.showView,
       number:this.state.number+1
     })
   }
  render () {
    console.log('render',this.state)
    return (
      <View>
        <View>测试12312</View>
        <Text>{this.state.text}</Text>
        <Image/>
        <Button type='primary' onClick={this.onAdd}>{this.state.number}</Button>
        <Input value='测试111'/>
        {this.state.showView ? <Text>测试</Text> : <Input value='输出'/>}
      </View>
    )
  }
}
