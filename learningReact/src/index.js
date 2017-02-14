//  引入react 模板，　类似于　require
import React from 'react';
//  引入 react-dom
import ReactDOM from 'react-dom';
// 引入当前文件夹下的 app.js
import App from './App';
// 引入当前文件夹下的 index.css
import './index.css';

//主文件进行渲染
ReactDOM.render(
    //jsx语言， <App /> 必须有空格和反斜杠
    <App />,
    document.getElementById('root')
);
