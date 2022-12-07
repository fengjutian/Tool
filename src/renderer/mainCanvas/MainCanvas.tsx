import React from 'react';
import GridLayout from 'react-grid-layout';

import BarList from '../bar/Barlist';
import styles from './mainCanvas.module.scss';

function MainCanvas() {
  return (
    <div className={styles['main-ctx-wrap']}>
      <BarList />
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
          a
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
          b
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
          c
        </div>
      </GridLayout>
    </div>
  );
}

export default MainCanvas;
