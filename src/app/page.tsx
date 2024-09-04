'use client'

import Image from "next/image";

export default function Home() {
  
  const cellArr = [
                    [{ value:2}, {value:4}, {value:8}, {value:16}],
                    [{ value:32}, {value:64}, {value:128}, {value:256}],
                    [{ value:512}, {value:1024}, {value:2048}, {value:16}],
                    [{ value:2}, {value:4}, {value:8}, {value:16}],
                  ] 

  function setBgColor(value: number) {
    switch (value) {
      case 2:
        return '#eee4da';
      case 4:
        return '#ede0c8';
      case 8:
        return '#f2b179';
      case 16:
        return '#f59563';
      case 32:
        return '#f67c5f';
      case 64:
        return '#f65e3b';
      case 128:
        return '#edcf72';
      case 256:
        return '#edcc61';
      case 512:
        return '#edc850';
      case 1024:
        return '#edc53f';
      case 2048:
        return '#edc22e';    
      default:
        return '#cdc1b4';
    }
  }

  function setColor(value:number) {
    if(value >=8) {
      return '#f9f6f2';
    }
  }

  return (
    <div className="flex justify-center">
      <div className="mt-20 w-2/7">
        <div className="flex justify-between">
          <h1 className="title">2048</h1>
          <div className="ml-10 flex">
            <div className="score">0</div>
            <div className="best ml-1">0</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="align-middle">Join the numbers and get to the <strong>2048 tile!</strong></p>
          <a className="restart-button cursor-pointer">New Game</a>
        </div>

        <div className="game-container mt-9">
          {/* <div className="game-message">
            <p></p>
            <div className="lower">
              <a className="keep-playing-button">Keep going</a>
              <a className="retry-button">Try again</a>
            </div>
          </div> */}

          <div className="absolute">
            {cellArr.map((row, rowIndex) => (
              <div key={rowIndex} className="grid-row">
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} style={{backgroundColor: setBgColor(cell.value), color: setColor(cell.value)}} className="grid-cell">
                    {cell.value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
