import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import quizimage from "../assets/new_quiz.jpg";
// import quizData from "../assets/data";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Index = () => {
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState([]);

  const handleNavigate = (value) => {
    navigate(`/quiz/${value._id}`);
    setSelectedData(value);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8001/v1/get_quizzes");
      const val = result.data.data;
      setQuizData(val);
      // console.log(val);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={4}>
      <Grid container spacing={1}>
        {quizData &&
          quizData.map((val, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} lg={3}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="dummy_img"
                    //   height="180"
                    image={quizimage}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography gutterBottom variant="h6" component="div">
                        {val?.test_name}
                      </Typography>
                      <Typography variant="body2">
                        {val?.questions?.length} questions
                      </Typography>
                      {/* <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Success rate : {val?.result}%
                      </Typography> */}
                    </Box>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#38b000",
                        "&:hover": {
                          backgroundColor: "#38b000",
                        },
                      }}
                      onClick={() => handleNavigate(val)}
                    >
                      <FaPlay style={{ color: "#fff" }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
