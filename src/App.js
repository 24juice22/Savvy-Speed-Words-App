import React from "react";
import Boxrow from "./components/Boxrow";
import Keyboard from "./components/Keyboard";
import possibleAnswers from "./possibleAnswers";
import possibleWords from "./possibleWords";
import Lowtime from "./components/Lowtime";
import Form from "./components/Form";
import Choosegame from "./components/Choosegame";
import { SavvyContext } from "./contexts/SavvyContext";

export default function App() {
  const [word, setWord] = React.useState("");
  const [boxes, setBoxes] = React.useState(allNewBoxes());
  const [position, setPosition] = React.useState({rowIndex: 0, columnIndex: 0});
  const [keyColor, setKeyColor] = React.useState(allNewKeys());
  const [hasStarted, setHasStarted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [displayTimer, setDisplayTimer] = React.useState("");
  const [timer, setTimer] = React.useState("");
  const [gameOver, setGameOver] = React.useState(false);
  const [name, setName] = React.useState("");
  const [chooseGame, setChooseGame] = React.useState(null);
  const [gameNumber, setGameNumber] = React.useState(1);
  const [timeIntervalID, setTimeIntervalID] = React.useState(0);
  const [lowTime, setLowTime] = React.useState(
    JSON.parse(localStorage.getItem("greatTime")) || [
      [{score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}],
      [{score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}],
      [{score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}],
      [{score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}, {score: null, name: ""}]
    ]
  );
  const words = possibleWords;
  let wordEntered = boxes[position.rowIndex].map(object => object.value).join("");

  ////// Create Hashes to Store Letter Occurrances ////
  let hashOfWord = {};
  let pinkHash = {};
  let blueHash = {};
  /////////////////////////////////////////////////////

  function allNewBoxes() {
    const newBoxes = [
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}],
      [{value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}, {value: "", color: null}]
    ];
    return newBoxes;
  }

  function allNewKeys() {
    const newKeys = [
      {value: "Q", color: null}, {value: "W", color: null}, {value: "E", color: null}, {value: "R", color: null},
      {value: "T", color: null}, {value: "Y", color: null}, {value: "U", color: null}, {value: "I", color: null},
      {value: "O", color: null}, {value: "P", color: null}, {value: "A", color: null}, {value: "S", color: null},
      {value: "D", color: null}, {value: "F", color: null}, {value: "G", color: null}, {value: "H", color: null},
      {value: "J", color: null}, {value: "K", color: null}, {value: "L", color: null}, {value: "Z", color: null},
      {value: "X", color: null}, {value: "C", color: null}, {value: "V", color: null}, {value: "B", color: null},
      {value: "N", color: null}, {value: "M", color: null}
    ];
    return newKeys;
  }
  
  ///// Create Boxrows /////////////////
  const rows = [0, 1, 2, 3, 4, 5];
  const boxRowElements = rows.map(row => 
    <Boxrow rowIndex={row} key={row}/>
  );
  ///////////////////////////////////

  function chooseRandomWord() {
    let randomNumber = Math.floor(Math.random() * possibleAnswers.length);
    let theWord = possibleAnswers[randomNumber].toUpperCase();
    setWord(theWord);
  }

  function startButtonClick() {
    setHasStarted(true);
    chooseRandomWord();
    let startDate = new Date().getTime();
    let countUpInterval = setInterval(countUp, 100, startDate);
    setTimeIntervalID(countUpInterval);
  }

  function displayTime(item) {
    let minutes = Math.floor((item % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((item % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((item % 10000) / 100);
    let displayDistance = minutes + "m " + seconds + "." + milliseconds + "s ";
    return displayDistance;
  }

  function countUp(beginningDate) {
    let timeIncreaseDate = new Date().getTime();
    let distance = timeIncreaseDate - beginningDate;
    setTimer(distance);
    setDisplayTimer(prevDisplayTimer => displayTime(distance));
  }

  function toggleErrorShake() {
    setError(prevError => !prevError);
    setMessage(prevMessage => {
      if (prevMessage === "") 
        return (`"${wordEntered}" is not a Word!`) ;    
      else 
        return ("");
    });
  }

  function numberOfGamesIndex(chooseGame) {
    if (chooseGame === 1) return 0;
    else if (chooseGame === 3) return 1;
    else if (chooseGame === 5) return 2;
    return 3;
  }

  function addLowTime() {
    let numberOfGames = numberOfGamesIndex(chooseGame);
    if (timer < lowTime[numberOfGames][19].score || lowTime[numberOfGames][19].score === null) {
      let array = [...lowTime];
      array[numberOfGames].pop() ;
      array[numberOfGames].push({score: timer, name: name});
      array[numberOfGames].sort((a, b) => a.score - b.score);
      for (let i = 0; i < array[numberOfGames].length; i++) 
        if (array[numberOfGames][0].score === null) {
          let itemRemoved = array[numberOfGames].shift();
          array[numberOfGames].push(itemRemoved);
        }
      setLowTime(array);
    }
  }

  function delayedGameOver() {
    setGameOver(prevGameOver => !prevGameOver);
  }

  function colors() {
    for (let i = 0; i < word.length; i++) {
      if (word[i] in hashOfWord)
          hashOfWord[word[i]] += 1;
      else
          hashOfWord[word[i]] = 1;
    }
    for (let i = 0; i < wordEntered.length; i++) 
      pinkHash[wordEntered[i]] = 0;
    const board = [...boxes];
    const keyboardColor = [...keyColor];
    for (let i = 0; i < wordEntered.length; i++) {
        let index = keyboardColor.map(item => item.value).indexOf(wordEntered[i]);
        if (wordEntered[i] === word[i]) {
            board[position.rowIndex][i].color = "boxPink";
            setBoxes(board);
            keyboardColor[index].color = "keyPink";
            setKeyColor(keyboardColor);
            if (pinkHash[wordEntered[i]] >= 1) 
                pinkHash[wordEntered[i]] += 1;
            else
                pinkHash[wordEntered[i]] = 1;
        }
        else if (word.includes(wordEntered[i]) && (hashOfWord[wordEntered[i]] - pinkHash[wordEntered[i]] >= 1) && blueHash[wordEntered[i]] !== 1) {
            board[position.rowIndex][i].color = "boxBlue";
            setBoxes(board);
            if (keyboardColor[index].color !== "keyPink") 
                keyboardColor[index].color = "keyBlue";
            setKeyColor(keyboardColor);
            if (wordEntered[i] in blueHash)
                blueHash[wordEntered[i]] += 0;
            else
                blueHash[wordEntered[i]] = 1;
        }
        else {
          board[position.rowIndex][i].color = "boxGray";
          setBoxes(board);
          if (keyboardColor[index].color !== "keyPink" && keyboardColor[index].color !== "keyBlue")
              keyboardColor[index].color = "keyGray";
          setKeyColor(keyboardColor);
        }   
    }
   
    for (let j = wordEntered.length - 1; j >= 0; j--) {
      if (word.includes(wordEntered[j]) && wordEntered[j] !== word[j] && (hashOfWord[wordEntered[j]] - pinkHash[wordEntered[j]] < 1)) {
        board[position.rowIndex][j].color = "boxGray";
        setBoxes(board);
      }
    }

    if (wordEntered === word) {
      if (chooseGame === gameNumber) {
        setMessage(`You win! The word is "${word}"`);
        setTimeout(delayedGameOver, 1200);
        clearInterval(timeIntervalID);
        addLowTime(gameNumber);
      }
      else {
        setGameNumber(prevGameNumber => prevGameNumber + 1);
        setBoxes(allNewBoxes());
        setMessage("");
        setKeyColor(allNewKeys());
        setPosition({rowIndex: 0, columnIndex: 0});
        chooseRandomWord();
      }
    }
  }

  React.useEffect(() => {
    localStorage.setItem("greatTime", JSON.stringify(lowTime));
  }, [lowTime])

  return (
    <SavvyContext.Provider value={{ setGameOver, setBoxes, setHasStarted, setMessage, setKeyColor, setDisplayTimer, setPosition, setGameNumber, allNewBoxes, allNewKeys, setChooseGame, name, boxes, position, error }}>
      <div>
        {name !== "" && !gameOver && <div className = "main">
          <h1 className="main__title">SA<span>VV</span>Y SPEED WORDS</h1>
          <div className="main__word-area">
            {boxRowElements}
            <div className="main__game-info">
              {hasStarted && <h2 className="main__word-count">{gameNumber}/{chooseGame}</h2>}
              <div className={gameOver ? "time time-finished" : "time"}>{displayTimer}</div>
            </div> 
          </div>
          <div className="message-area flex">
            {!hasStarted && <button className="btn main__btn" onClick={startButtonClick}>START</button>}
            <p className="message">{message}</p>
          </div>
          <Keyboard wordEntered={wordEntered} gameOver={gameOver} delayedGameOver={delayedGameOver} setGameOver={setGameOver} timeIntervalID={timeIntervalID} keyColor={keyColor} setMessage={setMessage} colors={colors} hasStarted={hasStarted} toggleErrorShake={toggleErrorShake} word={word} words={words} position={position} setPosition={setPosition} boxes={boxes} setBoxes={setBoxes} />
        </div>}
        {chooseGame === null && <Choosegame setChooseGame={setChooseGame} name={name}/>}
        {name === "" && chooseGame !== null && <Form setName={setName}/>}
        {gameOver && <Lowtime numberOfGamesIndex={numberOfGamesIndex} displayTime={displayTime} lowTime={lowTime} displayTimer={displayTimer} name={name} chooseGame={chooseGame} />}
      </div>
    </SavvyContext.Provider>
  )
}