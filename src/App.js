import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '부산 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '부산 고기 맛집', '신발 추천']);
  let [하트, 하트변경] = useState(0);
  let [좋아요, 좋아요변경] = useState(0);
  let [싫어요, 싫어요변경] = useState(0);
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App"> 
      <div className="black-nav">
        <div>이재성의 개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>여자 코트 추천</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 하트변경(하트 + 1) } } >❤️</span> { 하트 } </h3>
        <p>3월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } <span onClick={ () => { 좋아요변경(좋아요 + 1) } } >👍</span> { 좋아요 } </h3>
        <p>3월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } <span onClick={ () => { 싫어요변경(싫어요 + 1) } } >😩</span> { 싫어요 } </h3>
        <p>3월 19일 발행</p>
        <hr/>
      </div>

      <Model/>
    </div>
  );
}

function Model(){
  return (
    <div className="model">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
