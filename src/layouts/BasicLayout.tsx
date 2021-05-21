/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import React, { Fragment, useEffect } from 'react';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';

const BasicLayout: React.FC<any> = props => {


  

  return (
      <Fragment>
        123132
        {props.children}
      </Fragment>
        
 
 
  );
};

export default connect(({ global, settings }: ConnectState) => ({

}))(BasicLayout);
