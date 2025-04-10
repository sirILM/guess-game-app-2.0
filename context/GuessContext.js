import { createContext, useContext, useState } from "react";

const GuessContext = createContext();

const GuessProvider = ({ children }) => {
  const [userNumber, setUserNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [records, setRecords] = useState([]);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(0);
    setGuessRounds(0);
  }

  function addRecordHandler() {
    setRecords((currentRecords) => [
      ...currentRecords,
      { guessRounds, userNumber },
    ]);
  }

  function deleteRecordHandler(id) {
    setRecords((currentRecords) => {
      return currentRecords.filter((stat) => stat.id !== id);
    });
  }

  return (
    <GuessContext.Provider
      value={{
        userNumber,
        gameIsOver,
        guessRounds,
        pickedNumberHandler,
        gameOverHandler,
        startNewGameHandler,
        addRecordHandler,
        deleteRecordHandler,
        records,
      }}
    >
      {children}
    </GuessContext.Provider>
  );
};

const useGuess = () => useContext(GuessContext);

export { GuessProvider, useGuess };
