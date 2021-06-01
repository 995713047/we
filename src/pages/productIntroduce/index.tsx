import React from 'react';
import styles from './style.less';
import { Carousel } from 'antd';
import img from '../../assets/210129842919_s.jpg';
export default () => {
  return (
    <div className={styles.context}>
      <div className={styles.title}>产品介绍</div>
      <div className={styles.subTitle}>产品简介</div>
    </div>
  );
};