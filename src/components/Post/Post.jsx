import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData.js';
function Post({id,desc,photo,date,like,comment}) {
  const username = Users.filter(item => item.id === id)[0]
  
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="public\assets\person\3.jpeg" alt="" className="postImg" />
                    <span className="postName">{username.username}</span>  
                </div>
                <div className="postTopRight">
                    <span>{date}</span>
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                 <span className="postText">
                   {desc}
                 </span>
                <img src={photo} alt="" className="postCenterImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="public\assets\like.png" alt="" className="likeIcon" />
                    <img src="public\assets\heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{like} people liked it.</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post