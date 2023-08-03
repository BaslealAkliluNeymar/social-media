import Post from '../Post/Post'
import Share from '../Share/Share'
import './feed.css'
import { Posts , Users } from '../../dummyData.js'
function Feed() {
  console.log(Posts)
  console.log(Users)
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {
          Posts.map(item =>(
            <Post id={item.userId} desc={item.desc} photo={item.photo} date={item.date} like={item.like} comment={item.comment} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Feed