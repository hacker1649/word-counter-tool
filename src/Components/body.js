import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [charCountWithoutSpaces, setCharCountWithoutSpaces] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  
  const handleOnChange = (event) => {
    console.log("Handle On Change...");
    const inputText = event.target.value;
    setText(inputText);
    setWordCount(countWords(inputText));
    setCharCount(countCharacters(inputText));
    setCharCountWithoutSpaces(countCharactersWithoutSpaces(inputText));
    setSentenceCount(countSentences(inputText));
    setParagraphCount(countParagraphs(inputText));
  };
  
  const countWords = (text) => {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
  };
  
  const countCharacters = (text) => {
    if (!text) return 0;
    return text.length;
  };
  
  const countCharactersWithoutSpaces = (text) => {
    if (!text) return 0;
    return text.replace(/\s+/g, '').length;
  };

  const countSentences = (text) => {
    const sentenceEndings = /[.!?]+/g;
    const sentences = text.split(sentenceEndings).filter(sentence => sentence.trim().length > 0);
    return sentences.length;
  };

  const countParagraphs = (text) => {
    const paragraphs = /\n\s*\n/;
    const filteredParagraphs = text.split(paragraphs).filter(paragraph => paragraph.trim().length > 0);
    return filteredParagraphs.length;
  };

  return (
    <div className='box'>
      <p className='info-1'>Track word, character, sentence, and paragraph count for any text with this advanced free tool.</p>
      <p className='info-2'>To use this online word counter, please copy and paste your content into the box below, and then sit back and watch as Word Counter will run a real-time scan to perform operations.</p>
      <textarea className="text-input" onChange={handleOnChange} value={text} rows="20" placeholder="Type or paste your text here..."></textarea>
      <div className='card'>
        <p><strong>{wordCount}</strong> Words, <strong>{charCount}</strong> Characters, <strong>{charCountWithoutSpaces}</strong> Characters Without Space, <strong>{sentenceCount}</strong> Sentences, <strong>{paragraphCount}</strong> Paragraphs</p>
      </div>
    </div>
  )
}

export default TextInput;
