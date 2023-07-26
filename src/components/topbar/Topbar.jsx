import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import './topbar.css'
function topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
          <span className="logo">Social Media</span>
      </div>
      <div className="topbarCenter">
        <div className="search">
          <Search className='searchIcon' />
          <input type='text' placeholder='What is up!' className='searchInput'/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <Person className='topbarIconPerson' />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <Chat className='topbarIconPerson' />
            <span className="topbarIconBadge">1</span>
          </div>  
          <div className="topbarIconItems">
            <Notifications className='topbarIconPerson' />
            <span className="topbarIconBadge">1</span>
          </div>     
        </div>
        <img src="public\assets\person\1.jpeg"  alt="" className="topbarImage" />
      </div>
    </div>
  )
}

export default topbar