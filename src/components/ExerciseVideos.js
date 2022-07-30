import { YouTube } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideo, name }) => {

  return (
   
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      
      <Typography variant="h4">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0px" },
        }}
        mt="25px"
      >
        {exerciseVideo?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant="h5" color="#000">
              {item.video.title}
            </Typography>

            <Typography variant="h6" color="#000">
              <Stack direction="row" alignItems="center" gap="10px">
                <YouTube sx={{color:"red"}} />
                {item.video.channelName}
              </Stack>
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
