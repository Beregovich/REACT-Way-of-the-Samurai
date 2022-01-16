import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className='header'>Header      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://images.unsplash.com/photo-1504194104404-433180773017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        </div>
        <div>
          ava+desc
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div> post 1</div>
          <div> post 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
