import { trigram } from 'n-gram';

export const textSplitter = (text: string): string[] => {
  /* 
  let finalText: string[] = [];
  let temp = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '') {
      continue;
    }
    if (i % 2 === 0) {
      temp += text[i];
      temp.trim();
      finalText.push(temp);
      temp = '';
    } else {
      temp += text[i];
    }
  }
  return finalText; 
  */
  return trigram(text);
};
