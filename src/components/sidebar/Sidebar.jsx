import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarItem">
              <RssFeedIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Feed</span>
          </li>
          <li className="sidebarItem">
              <ChatIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Chat</span>
          </li>
          <li className="sidebarItem">
              <GroupsIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Groups</span>
          </li>
          <li className="sidebarItem">
              <PlayCircleFilledIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Videos</span>
          </li>
          <li className="sidebarItem">
              <BookmarksIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">BookMark</span>
          </li>
          <li className="sidebarItem">
              <QuestionMarkIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Questions</span>
          </li>
          <li className="sidebarItem">
              <WorkIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Jobs</span>
          </li>
          <li className="sidebarItem">
              <EventIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Events</span>
          </li>
          <li className="sidebarItem">
              <SchoolIcon className='sidebarIcon' />
              <span className="sidebarItemDesc">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="public\assets\person\2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar