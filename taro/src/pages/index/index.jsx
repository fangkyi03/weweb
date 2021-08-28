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
        <Image src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F28%2F20180428114906_ulvqd.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632765222&t=7ec7538a03a046f3361749b9bf47bae5'/>
        <Button type='primary' onClick={this.onAdd}>{this.state.number}</Button>
        <Input value='测试111'/>
        {this.state.showView ? <Text>测试</Text> : <Input value='输出'/>}
      </View>
    )
  }
}
