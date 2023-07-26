import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="public\assets\person\3.jpeg" alt="" className="shareProfileImg" />
                <input type="text" placeholder='What is in your mind Bas?' className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon  htmlColor='red' className='shareOptionIcon'/>
                        <span className='shareOptionText'>Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='shareOptionIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon  htmlColor='green'className='shareOptionIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon  htmlColor='goldenrod'className='shareOptionIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                    <button className="shareBtn">Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share