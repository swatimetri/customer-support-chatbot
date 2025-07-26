// src/components/MessageList.jsx
import Message from './Message';

export default function MessageList({ messages }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}
