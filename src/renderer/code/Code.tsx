import React from 'react';
import Editor from '@monaco-editor/react';

import styles from './code.module.scss';

function Code() {
  return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
}

export default Code;
