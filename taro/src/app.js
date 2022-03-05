
const body = parent.document.body
const div = parent.document.createElement('div')
div.innerHTML = '123'
div.style.zIndex = '9999'
body.appendChild(div)

import { Component } from 'react'

import './app.less'

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
