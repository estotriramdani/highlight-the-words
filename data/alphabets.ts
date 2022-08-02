export const alphabets = {
  a: 'z',
  b: 'y',
  c: 'x',
  d: 'r',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'w',
  j: 'q',
  k: 'p',
  l: 'o',
  m: 'x',
  n: 'm',
  o: 'l',
  p: 'k',
  q: 'j',
  r: 'i',
  s: 'h',
  t: 'g',
  u: 'e',
  v: 'f',
  w: 'd',
  x: 'n',
  y: 'b',
  z: 'a',
};

const origins = Object.keys(alphabets);
const translateds = Object.values(alphabets);

export const newAlphabets = origins.map((alph, index) => ({
  origin: alph,
  translated: translateds[index],
}));

export const findIndexOrigin = (alphabet: string) => {
  return origins.indexOf(alphabet);
};

export const findIndexTranslated = (alphabet: string) => {
  return translateds.indexOf(alphabet);
};

export const replaceSentence = ({
  sentence,
  isTranslating,
}: {
  sentence: string;
  isTranslating?: boolean;
}) => {
  const newSentence = sentence.split('');
  return newSentence
    .map((alphabet) => {
      if (isTranslating) {
        const indexOrigin = findIndexOrigin(alphabet);
        if (indexOrigin !== -1) {
          return newAlphabets[indexOrigin].translated;
        }
        return alphabet;
      } else {
        const indexTranslated = findIndexTranslated(alphabet);
        if (indexTranslated !== -1) {
          return newAlphabets[indexTranslated].origin;
        }
        return alphabet;
      }
    })
    .join('');
};
