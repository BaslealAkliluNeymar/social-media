import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="public\assets\person\3.jpeg" alt="" className="postImg" />
                    <span className="postName">John Carter</span>  
                </div>
                <div className="postTopRight">
                    <span>5min Ago</span>
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                 <span className="postText">
                    Hey! Its my first post!
                 </span>
                <img src="public\assets\post\1.jpeg" alt="" className="postCenterImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="public\assets\like.png" alt="" className="likeIcon" />
                    <img src="public\assets\heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 people liked it.</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post