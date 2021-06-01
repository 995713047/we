/*
 * @Author: your name
 * @Date: 2021-06-01 21:48:31
 * @LastEditTime: 2021-06-01 22:13:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newStart\sss\we\src\pages\companyIntroduce\index.tsx
 */
import React from 'react';
import styles from './style.less';
import { Carousel } from 'antd';
import img from '../../assets/210129842919_s.jpg';
export default () => {
  return (
    <div className={styles.context}>
      <div className={styles.title}>公司介绍</div>
      <div className={styles.subTitle}>公司简介</div>
      <Carousel autoplay>
        <div>
          <img src={img} />
        </div>
        <div>
          <img src={'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF'} />
        </div>
        <div>
          <img src={img} />
        </div>
        <div>
            <img src={'https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF'} />
        </div>
      </Carousel>
    </div>
  );
};
