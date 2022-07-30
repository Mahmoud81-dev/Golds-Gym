import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { fetchData, exerciseOptions, youtubeOptions } from "../util/fetchData";

import Details from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideos from "../components/ExerciseVideos";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);


      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideo(exerciseVideoData.contents);

      const targetMuscleExercisesData=await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);


      const equipmentExercisesData=await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
      
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}  equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
