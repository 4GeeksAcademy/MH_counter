import ReactDOM from 'react-dom/client';
import React from 'react';
import SecondsCounter from '../js/component/secondsCounter';

const root = ReactDOM.createRoot(document.getElementById('app')); 

root.render(<SecondsCounter seconds={3434} />);