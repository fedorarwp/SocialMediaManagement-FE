import './assets/style/main.css'
function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="post-item">
          <div className="card">
            <p>This is an example of a drafted tweet that has not been posted yet, so the user has two options: to post now or schedule it for later</p>
            <button className="btn-more">...</button>
          </div>
          <div className="btn-container">
          <button className="btn">Post Now</button>
          </div>
          <div className="btn-container">
          <button className="btn">Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
