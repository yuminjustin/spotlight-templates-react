import '@/assets/css/reset.css';
import '@/assets/css/style.css';
import 'babel-polyfill'
/* react*/
import React from 'react';
import { render } from 'react-dom';
import App from 'C/app';


render(<App />, 
document.getElementById('app'));

