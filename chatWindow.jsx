// src/components/ChatWindow.jsx
import { useState } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const handleSend = (messageText) => {
    const userMessage = { text: messageText, sender: 'user' };
    const aiMessage = { text: 'AI reply to: ' + messageText, sender: 'ai' };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      width: '400px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      margin: '20px auto'
    }}>
      <MessageList messages={messages} />
      <UserInput onSend={handleSend} />
    </div>
  );
}
