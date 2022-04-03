import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import {createStage}  from "../gameHelpers"

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text='Score'></Display>
          <Display text='Row'></Display>
          <Display text='Level'></Display>
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
