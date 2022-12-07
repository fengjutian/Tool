import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { bar } from './bar';
import styles from './barlist.module.scss';

const { Header, Sider, Content } = Layout;

export const Barlist = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [barList, setBarList] = useState<any[]>(bar);
  const navigate = useNavigate();

  const GoNewPage = (item: any) => {
    navigate('/code');
  };

  return (
    <>
      <div className={styles.listWrap}>
        {barList &&
          barList.map((item: any) => {
            return (
              <div className={styles.barItem} onClick={GoNewPage(item)} >
                <item.icon />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Barlist;
