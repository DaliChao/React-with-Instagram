import React,{Component} from 'react';
import superagent from 'superagent';
import {connect} from 'react-redux';
import actions from '../actions';



class Feed extends Component{
  constructor(){
    super();
    this.state={
      username:'',
    }
  }

  updateUsername(event){
    this.setState({
      username:event.target.value
    })
  }

  fetchPhotos(){
    console.log("Fetch:"+this.state.username);
    superagent
    .get('http://www.instagram.com/'+this.state.username+'/media/')
    .query(null)
    .set('Accept','application/json')
    .end((err,response)=>{
      if(err){
        console.log('Error:'+err)
        return
      }
    //  console.log('RESPONSE:'+JSON.stringify(response.body.items))
      this.props.feedPhoto(response.body.items)
    })
  }

  render(){
    const reduxFeed=this.props.reduxFeed;
    return(
      <div>
        <input type="text" onChange={this.updateUsername.bind(this)} className="form-control m-top" placeholder="EnterInstagram Username"/><br/>
        <button onClick={this.fetchPhotos.bind(this)} className="btn btn-primary">Show Photo</button>
        <div className="m-top">
          <h3>Recent Post Photos</h3>
          <div>
           {reduxFeed.all.map((post,index)=>{
            const url=post.images.low_resolution.url;
            return <div className="well" key={index}>
                     <img src={url}/>
                   </div>
           })}
         </div>
        </div>
      </div>
    )
  }
}

const stateToProps=(state)=>{
  return{
    reduxFeed:state.user
  }
}
const dispatchToProps=(dispatch)=>{
  return{
    feedPhoto:(feed)=>dispatch(actions.feedPhoto(feed))
  }
}


export default connect(stateToProps,dispatchToProps)(Feed);
