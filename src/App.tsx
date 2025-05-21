import { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    console.log('User input:', inputText);
    // call fetch
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
    </div>
  );
};

export default App;
