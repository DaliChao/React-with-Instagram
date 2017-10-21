import constants from '../constants';


var initialState={
  all:[]
}

export default (state=initialState,action)=>{
  switch(action.type){
    case constants.FEED_RECEIVED:
     console.log('feedReducer');
     let newState=Object.assign({},state);
     newState['all']=action.data;
     return newState;

    default:
     return state;
  }
}
