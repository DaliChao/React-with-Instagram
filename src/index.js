import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Feed} from './components';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component{
  render(){
    return(
     <Provider store={store.configure(null)}>

         <Feed/>
       
     </Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
