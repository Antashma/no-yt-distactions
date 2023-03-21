import './App.css';
import VideoGallery from './components/VideoGallery.js';
import VideoPlayer from './components/VideoPlayer.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>∘⋅⋅⋅⋄⊙ Study Video Collection ⊙⋄⋅⋅⋅∘</h1>
      </header>
      <main>
        <VideoPlayer />
        <VideoGallery />
      </main>
      <footer>
        <p>Footer Info</p>
      </footer>
    </div>
  );
}

export default App;
