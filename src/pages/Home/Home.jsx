import './Home.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

function Home() {
  return (
    <div>
        <Topbar />
        <div className="container">
           <Sidebar /> 
           <Feed />
           <RightBar />
        </div>
    </div>
  )
}

export default Home