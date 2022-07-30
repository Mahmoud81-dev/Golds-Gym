import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Loader from "./Loader";
import  {HorizontalScrollBar}  from "./HorizontalScrollBar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3" mb={6} ml={3}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction="row" sx={{p:"2",position:"relative"}}>
        {targetMuscleExercises.length? <HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
      </Stack>

      <Typography variant="h3" mb={6} mt={7} ml={3}>
        Exercises that use the same equipment 
      </Typography>

      <Stack direction="row" sx={{p:"2",position:"relative"}}>
        {equipmentExercises.length? <HorizontalScrollBar data={equipmentExercises}/>:<Loader/>}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
