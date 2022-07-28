/*
 * @Author: your name
 * @Date: 2021-08-02 16:46:44
 * @LastEditTime: 2021-08-02 18:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro_app/src/pages/index/index.tsx
 */
import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goWeb = () => {
    Taro.navigateTo({
      url: '/pages/webview/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>表单</Text>
        <Button onClick={this.goWeb}>打开webView网页</Button>
      </View>
    )
  }
}
