import { useState } from 'react';
import './utils/main.css';
import gptLogo from '../src/assets/chatgptLogo.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import rocket from './assets/rocket.svg';
import saved from './assets/send.svg';
import sendBtn from './assets/send.svg';
import UserIcon from './assets/user-icon.png';
import gptImg from './assets/chatgptLogo.svg';
import { fetchChatGPTResponse } from './Api/ApiService';

function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: 'user', text: userInput };
    setMessages([...messages, newMessage]);
    setUserInput('');
    setError(null);

    try {
      const response = await fetchChatGPTResponse(userInput);
      const botMessage = { sender: 'bot', text: response };
      setMessages((prevMessages) => [...prevMessages, newMessage, botMessage]);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='App'>
      {/* sidebar */}
      <div className="sidebar">
        {/* upper side */}
        <div className="uperSide">
          {/* upper side top */}
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
        <div className="chats">
          {messages.map((msg, index) => (
            <div key={index} className={`chat ${msg.sender === 'bot' ? 'bot' : ''}`}>
              <img className='chatImg' src={msg.sender === 'bot' ? gptImg : UserIcon} alt="" />
              <p className='txt'>{msg.text}</p>
            </div>
          ))}
        </div>
        {/* chat Footer */}
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder='Send a message...'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
            />
            <button className="send" onClick={handleSendMessage}>
              <img src={sendBtn} alt="" />
            </button>
          </div>
          {error && <p className="error">{error}</p>}
          <p>ChatGPT may produce incorrect results</p>
        </div>
      </div>
    </div>
  );
}

export default App;
