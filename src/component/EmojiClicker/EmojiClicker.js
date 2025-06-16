import React, { useState } from 'react';
import './EmojiClicker.css';

function EmojiClicker() {
  const [emojis, setEmojis] = useState([
    { symbol: '😀', count: 0 },
    { symbol: '🐱', count: 0 },
    { symbol: '🎉', count: 0 },
    { symbol: '🚀', count: 0 },
    { symbol: '🍕', count: 0 },
    { symbol: '😎', count: 0 },
    { symbol: '💡', count: 0 },
    { symbol: '🐶', count: 0 },
  ]);

  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);

  const changeEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const selectedEmoji = emojis[randomIndex];

    // Update count
    const updatedEmojis = emojis.map((e, index) =>
      index === randomIndex ? { ...e, count: e.count + 1 } : e
    );

    setEmojis(updatedEmojis);
    setCurrentEmoji(updatedEmojis[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Emoji Clicker</h1>
      <div className="emoji">{currentEmoji.symbol}</div>
      <p>You clicked "{currentEmoji.symbol}" {currentEmoji.count} times!</p>
      <button onClick={changeEmoji}>Change Emoji</button>

      <hr />
      <h3>All Emoji Clicks:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {emojis.map((e, idx) => (
          <li key={idx}>
            {e.symbol} clicked {e.count} times
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmojiClicker;
