import './rightbar.css'

function RightBar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="rightbarImgContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline">This</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightBar