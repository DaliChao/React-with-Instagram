import constants from '../constants';


export default{
  feedPhoto(feed){
    return{
      type:constants.FEED_RECEIVED,
      data:feed
    }
  }
}
