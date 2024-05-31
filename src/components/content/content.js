import React from 'react';
import logo from '../../logo.svg';
import './content.css';
import { useParams } from 'react-router-dom';

export const Content = () => {
  const { theme = 'theme1' } = useParams();

  return (
    <div className="content-container">
        <div className={`container ${theme}`}>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="content-title">Some title</h1>
          <p className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores consequatur cumque debitis
            doloremque
            eos explicabo facilis ipsum maiores minima modi porro, recusandae veniam.
          </p>
        </div>
    </div>
  );
};

