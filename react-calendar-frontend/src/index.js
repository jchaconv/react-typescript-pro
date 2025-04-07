/*import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';

import './styles.css';

ReactDOM.render(
    <CalendarApp />,
  document.getElementById('root')
);
*/

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa la API correcta
import { CalendarApp } from './CalendarApp';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalendarApp />
);
