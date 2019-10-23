import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import questions from './questions';
import registerServiceWorker from './registerServiceWorker';

const Appa =()=>(
<BrowserRouter>
<React.Fragment>
<Route path="/App" component={App}/>
<Route path="/questions" component={questions}/>
</React.Fragment>
</BrowserRouter>


);


ReactDOM.render(<Appa />, document.getElementById('root'));
registerServiceWorker();
