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
                {/* <img src="public\assets\post\1.jpeg" alt="" className="postCenterImg" /> */}
            </div>
            <div className="postBottom">
                <ul className="postIcons">
                    <li className="postIcon">
                            {/* <img src="public\assets\like.png" alt="" className="icon" /> */}
                    </li>
                    <li className="postIcon">
                        {/* <img src="public\assets\heart.png" alt="" className="icon" /> */}
                    </li>
                    <li className="postIcon">
                        {/* <img src="public\assets\gift.png" alt="" className="icon" /> */}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Post