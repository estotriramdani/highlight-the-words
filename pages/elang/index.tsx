/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import {  replaceSentence } from '../../data/alphabets';

export default function ElangPage() {
  const [isTranslating, setIsTranslating] = useState(false);
  const [rawText, setRawText] = useState('');
  const [resultText, setResultText] = useState('');

  const submitHandler = () => {
    const sentence = replaceSentence({
      sentence: rawText,
      isTranslating,
    });
    setResultText(sentence);
  };

  const copyResultToClipboard = () => {
    navigator.clipboard.writeText(resultText);
  };

  return (
    <>
    <div className="w-full lg:w-[50vw] lg:mx-auto px-3 lg:px-6">
      <h1 className="text-xl">
        Where Languages are made<span className="text-6xl">.</span>
      </h1>
      <div className="mt-4">
        <div className="btn-group mb-3">
          <button
            onClick={() => setIsTranslating(false)}
            className={`btn btn-sm ${!isTranslating ? 'btn-active' : ''}`}
          >
            Convert
          </button>
          <button
            onClick={() => setIsTranslating(true)}
            className={`btn btn-sm ${isTranslating ? 'btn-active' : ''}`}
          >
            Translate
          </button>
        </div>
        <textarea
          rows={5}
          placeholder="Type your sentence in your language here"
          className="input input-bordered input-primary w-full pt-2 mb-1"
          onChange={(e) => setRawText(e.target.value)}
        />
        <button className="btn btn-sm btn-primary" onClick={submitHandler}>
          Submit
        </button>
        {resultText.length !== 0 && (
          <div className="mt-3">
            <div className="card w-full bg-base-100 shadow-xl image-full ring ring-primary relative">
              <div className="absolute top-4 right-4 z-30">
                <label htmlFor="my-modal" className="btn modal-button" onClick={copyResultToClipboard}>
                  <i className="bi bi-clipboard"></i>
                </label>
              </div>
              <div className="card-body">
                <p>{resultText}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <input type="checkbox" id="my-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Text copied!</h3>
        <p className="py-4">You can paste it anywhere!!! 🗒️</p>
        <div className="modal-action">
          <label htmlFor="my-modal" className="btn">Yay!</label>
        </div>
      </div>
    </div>
    </>
  );
}
