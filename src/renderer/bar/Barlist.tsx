import { useState } from 'react';
import { Layout, Menu } from 'antd';

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined
} from '@ant-design/icons';

import { bar } from './bar';
import styles from './barlist.module.scss';

const { Header, Sider, Content } = Layout;

export const Barlist = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [barList, setBarList] = useState<any[]>(bar);

  return (
    <>
      <div className={styles.listWrap}>
        {barList &&
          barList.map((item: any) => {
            return (
              <div className={styles.barItem}>
                <item.icon />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Barlist;
