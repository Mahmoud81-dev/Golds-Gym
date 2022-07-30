import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
const Home = () => {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Stack>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercise}
        setExercise={setExercise}
        bodyPart={bodyPart}
      />
    </Stack>
  );
};

export default Home;
