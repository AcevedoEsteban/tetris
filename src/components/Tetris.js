import React from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import {createStage}  from "../gameHelpers"
import {StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text='Score'></Display>
          <Display text='Row'></Display>
          <Display text='Level'></Display>
        </div>
        <StartButton />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
