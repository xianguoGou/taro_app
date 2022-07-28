/*
 * @Author: your name
 * @Date: 2021-08-02 16:46:44
 * @LastEditTime: 2021-08-02 18:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro_app/src/pages/index/index.tsx
 */
import { Component } from 'react'
import { View, Text, WebView } from '@tarojs/components'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <WebView src='http://localhost:9000/terms' />
    )
  }
}
