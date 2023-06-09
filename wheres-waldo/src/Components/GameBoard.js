import React, { useState } from "react";
import level1 from '../Resources/level-1.jpg'
import SelectionDropdown from "./SelectionDropdown.js";

function GameBoard(props) {
  // State variables
  const [isClicked, setIsClicked] = useState(false);
  const [position, setPosition] = useState({
    X: 0,
    Y: 0
  });
  const [scaledX, seScaledX] = useState(0);
  const [scaledY, setScaledY] = useState(0);

  // Handle Game Board click event
  // Position holds the pixel values of the distance from the top edge and left edge of the Game Board
  // ScaledX and ScaledY hold the scaled percentage values realtive to the size of the Game Board
  const handleImageClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = rect.width - (rect.width - e.clientX); //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    setIsClicked(!isClicked);
    setPosition({X: x, Y: y});
    seScaledX((x / rect.width) * 100);
    setScaledY((y / rect.height) * 100);
  }

  return (
    <div className="flex relative shadow-inner justify-center">
      <div className="shadow-2xl">
        <img src={level1 } alt="Where's Waldo?" onClick={handleImageClick} className="cursor-pointer"/>
        {isClicked && (
            <SelectionDropdown position={position} characterCoordinates={props.characterCoordinates} scaledX={scaledX} scaledY={scaledY} setWaldoFound={props.setWaldoFound} setOdlawFound={props.setOdlawFound} setWizardFound={props.setWizardFound} setIsClicked={setIsClicked}/>
        )}
      </div>
    </div>
  );
}

export default GameBoard;