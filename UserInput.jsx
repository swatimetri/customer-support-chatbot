// src/components/UserInput.jsx
import { useState } from 'react';

export default function UserInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', padding: '10px' }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, padding: '8px' }}
      />
      <button type="submit" style={{ marginLeft: '10px' }}>Send</button>
    </form>
  );
}
