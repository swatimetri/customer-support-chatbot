// src/components/Message.jsx
export default function Message({ text, sender }) {
  const isUser = sender === 'user';

  return (
    <div style={{
      textAlign: isUser ? 'right' : 'left',
      background: isUser ? '#dcf8c6' : '#f1f0f0',
      padding: '10px',
      margin: '5px',
      borderRadius: '8px',
      maxWidth: '70%',
      alignSelf: isUser ? 'flex-end' : 'flex-start'
    }}>
      {text}
    </div>
  );
}
