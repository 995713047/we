/*
 * @Author: your name
 * @Date: 2021-05-21 21:11:13
 * @LastEditTime: 2021-06-01 23:15:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newStart\sss\we\src\layouts\BasicLayout.tsx
 */
/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import React from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import { Menu } from 'antd';
import Icon from '@ant-design/icons';
import styles from './BasicLayout.less';
import title from '../assets/title.png';
import {showProduct, companyIntroduce, iphone } from './Iconfont'
const BasicLayout: React.FC<any> = props => {
  let history = useHistory();
  function handleClick(e:any){
    console.log(e)
    history.push(e.key)
  }
  return (
    <div className={styles.content}>
      <div className={styles.subMemu}>
        <img src={title} />
        <div className={styles.memu}>
          <Menu onClick={handleClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
            <Menu.Item key="/about-us">
              <Icon component={companyIntroduce} />
              <span>公司介绍</span>
            </Menu.Item>
            <Menu.Item key="/about-product">
              <Icon component={showProduct} />
              <span>产品展示</span>
            </Menu.Item>
            <Menu.Item key="/about-contact">
              <Icon component={iphone} />
              <span>联系方式</span>
            </Menu.Item>
            
          </Menu>
          <div className = {styles.message}>
            
              {/* <div className = {styles.Contact}>联系方式</div> */}
              <div>联系人：董小姐</div>
              <div>地址：江苏省南京市浦口区江北新区药谷大道11号生命科技岛07栋3层</div>
              <div>电话：025/5825/5120</div>
              <div>电子邮箱：info@poclight.com</div>
              <div className = {styles.sitewidget}>&nbsp;&nbsp;版权所有© 南京浦光生物技术有限公司 体外诊断类检测设备和试剂 化学发光 POCT</div>
          </div>
        </div>
      </div>
      <div className = {styles.main}>
        {props.children}
      </div>
      
    </div>
  );
};

export default connect(({ global, settings }: ConnectState) => ({}))(BasicLayout);
