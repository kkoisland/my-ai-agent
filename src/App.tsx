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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1>AI Agent</h1>
      <textarea
        className="border border-gray-300 rounded px-4 py-2 w-[800px] h-[64px] mb-[20px] resize-none text-base placeholder:text-[24px]"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Ask something..."
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded transition-colors duration-200"
        onClick={handleSubmit}
      >
        Send
      </button>
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
