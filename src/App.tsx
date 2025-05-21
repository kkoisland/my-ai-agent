import { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputText.trim()) return;

    try {
      const res = await fetch('https://example.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      setResponseText(data.reply); // `reply` は仮のフィールド名
    } catch (err) {
      console.error(err);
      setResponseText('Error: Failed to fetch response.');
    }
  };

  return (
    <div>
      <h1>AI Agent</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Ask something..."
      />
      <button onClick={handleSubmit}>Send</button>
      {responseText && (
        <div>
          <h2>Response</h2>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
};

export default App;
