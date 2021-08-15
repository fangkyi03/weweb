import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';

export default (props) => {
  const [text,setText] = React.useState('测试')
  React.useEffect(()=>{
    console.log('123456',text)
    setInterval(()=>{
      setText('当前奥术549879897898大师大所啊')
    },2000)
  })
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>{text}</Text>
          开始
        </View>
      </View>
    </View>
  );
};
