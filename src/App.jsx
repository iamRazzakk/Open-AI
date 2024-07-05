import './utils/main.css'
import gptLogo from '../src/assets/chatgptLogo.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import rocket from './assets/rocket.svg'
import saved from './assets/send.svg'

function App() {

  return (
    <div className='App'>
      {/* sidebar */}
      <div className="sidebar">
        {/* uperside */}
        <div className="uperSide">
          {/* uperside top */}
          <div className="uperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className='brand'>ChatGPT</span>
            <button className='midBtn'>
              <img src={addBtn} alt="New Chat" className="addBtn" />
              New Chat
            </button>
            <div className="uperSideBottom">
              <button className="query"><img src={msgIcon} alt="" />What is Programming ?</button>
              <button className="query"><img src={msgIcon} alt="" />How To use an API ?</button>
            </div>
          </div>

        </div>
        {/* Lower Side */}
        <div className="lowerSide">
          {/* for home */}
          <div className="listItems">
            <img src={home} alt="" className="listItemimg" />
            Home
          </div>
          {/* for saved */}
          <div className="listItems">
            <img src={saved} alt="" className="listItemimg" />
            Save
          </div>
          {/* upgrade */}
          <div className="listItems">
            <img src={rocket} alt="" className="listItemimg" />
            Upgrade To Pro
          </div>
        </div>

      </div>
      {/* main part */}
      <div className="main">

      </div>
    </div>
  )
}

export default App
