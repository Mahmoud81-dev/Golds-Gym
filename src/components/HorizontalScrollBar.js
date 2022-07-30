
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyParts from "./BodyParts";
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import {Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };



export const HorizontalScrollBar = ({ data,setBodyPart,bodyPart,isBodyParts }) => {

  return (
   
     <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {data.map((item) => (
        <Box
          key={item}
          itemId={item.id || item.name}
          title={item.id || item.name}
          m="0 40px"
        >
          {isBodyParts?<BodyParts  item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          
        :<ExerciseCard exercise={item}/>
        }
        </Box>
      ))}
    </ScrollMenu>
 
  );
};
