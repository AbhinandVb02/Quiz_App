import { useEffect, useState } from "react";
import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoHome } from "react-icons/io5";

export const Info = ({ questions, index, isSubmitted,answers,setIsExplanation,score }) => {
  return (
    <Card
      component={Paper}
      sx={{
        p: 1,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        fontFamily: "sans-serif",
        px: 2.5,
        height: "96%",
        // width: "100%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography>
          Question {index + 1}/{questions.length}
        </Typography>
        <Typography
          onClick={() => {
            setIsExplanation(true);
          }}
        >
          Need Help?
        </Typography>
      </Box>
      <Box
        my={4}
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {questions.map((_, questionIndex) => {
          const getBackgroundColor = () => {
            if (!isSubmitted)
              return questionIndex === index ? "#71b0ec" : "grey";
            const isCorrect =
              answers[questionIndex] === questions[questionIndex]?.ans;
            const isAnswered = answers[questionIndex] !== undefined;

            if (isCorrect) return "green";
            if (isAnswered) return "red";
            return "grey";
          };

          return (
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: getBackgroundColor(),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                cursor: "pointer",
              }}
              key={questionIndex}
              onClick={() => {
                if (!isSubmitted) {
                  setIndex(questionIndex);
                  setSelectedAns(answers[questionIndex] || null);
                }
              }}
            >
              <Typography variant="body1">{questionIndex + 1}</Typography>
            </Box>
          );
        })}
      </Box>
      {isSubmitted && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Your Score : {score}</Typography>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IoHome />
            <Typography>Home</Typography>
          </Link>
        </Box>
      )}
    </Card>
  );
};
