    import './App.css';
    import { useState } from 'react';
    import Counter from './component/Counter/Counter';
    import EmojiClicker from './component/EmojiClicker/EmojiClicker';
    import {FocusInput,RenderTracker} from './component/UseRef/UseRef'; // import FocusInput from './components/FocusInput/FocusInput';
    // import Image from './components/Image/Image';

    function App() {
      const [selectedComponent, setSelectedComponent] = useState('counter');

      return (
        <div className="App">
          <div className="sidebar">
            <h3 >My Projects</h3>
            <button onClick={() => setSelectedComponent('counter')}>Counter</button>
            <button onClick={() => setSelectedComponent('emoji-clicker')}>Emoji Clicker</button>
            {/* <button onClick={() => setSelectedComponent('image')}>Image</button> */}
            <button onClick={() => setSelectedComponent('user-ref')}>User Ref</button>
          </div>

          <div className="main-content">
            {selectedComponent === 'counter' && <Counter />}
            {selectedComponent === 'emoji-clicker' && <EmojiClicker />}
            {selectedComponent === 'user-ref' && <FocusInput/>}
            {selectedComponent === 'user-ref' && <RenderTracker/>}
            {/* {selectedComponent === 'image' && <Image name="Project Image" />} */}
          </div>
        </div>
      );
    }

    export default App;
