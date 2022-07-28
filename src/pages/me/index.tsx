/*
 * @Author: your name
 * @Date: 2021-08-02 16:46:44
 * @LastEditTime: 2021-08-02 18:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro_app/src/pages/index/index.tsx
 */
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>我的</Text>
        <View onClick={() => {
          Taro.navigateTo({ url: 'pages/home/index' })
        }}>返回首页</View>
      </View>
    )
  }
}
