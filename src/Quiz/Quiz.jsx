import { useEffect, useState } from "react";
import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { IoHome } from "react-icons/io5";
import { Info } from "./Info";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAns, setSelectedAns] = useState(null);
  const [score, setScore] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExplanation, setIsExplanation] = useState(false);
  const [selectedData, setSelectedData] = useState("");

  const url_params = useParams();

  useEffect(() => {
    handleQuizbyId();
  }, []);

  const handleQuizbyId = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8001/v1/get_quizzes/${url_params.id}`
      );
      const val = result.data.data;
      setSelectedData(val);
    } catch (error) {
      console.log(error);
    }
  };

  const questions = selectedData?.questions || [];
  const question = questions[index];

  const checkAns = (optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = optionIndex;
    setAnswers(updatedAnswers);
    setSelectedAns(optionIndex);
  };

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelectedAns(answers[index + 1] || null);
      setIsExplanation(false);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setSelectedAns(answers[index - 1]);
    } else {
      setIndex(0);
      setSelectedAns(answers[0]);
    }
    setIsExplanation(false);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question, i) => {
      if (answers[i] === question.ans) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setIsSubmitted(true);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "18px", fontWeight: 600 }}
      >
        {selectedData?.test_name}
      </Typography>

      <Grid item xs={6} sx={{ display: { xs: "block", md: "none" }, mt: 2 }}>
        <Info
          questions={questions}
          index={index}
          isSubmitted={isSubmitted}
          answers={answers}
          setIsExplanation={setIsExplanation}
          score={score}
        />
      </Grid>

      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={9}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box sx={{ p: 2, border: "1px solid blue", borderRadius: 2 }}>
              <Typography sx={{ fontWeight: 600 }}>
                Question {index + 1}
              </Typography>
              <Typography sx={{ lineHeight: 2 }}>
                {question?.question}
              </Typography>
            </Box>

            {question?.options?.map((option, optionIndex) => {
              const isCorrect = optionIndex === question.ans;
              const isWrongSelection =
                isSubmitted && selectedAns === optionIndex && !isCorrect;
              return (
                <Box
                  key={optionIndex}
                  sx={{
                    p: 1.5,
                    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
                    fontFamily: "sans-serif",
                    pl: 2.5,
                    borderRadius: 2,
                    backgroundColor:
                      isSubmitted && isCorrect
                        ? "#4caf50"
                        : isWrongSelection
                        ? "#f44336"
                        : selectedAns === optionIndex
                        ? "#71b0ec"
                        : "",
                    cursor: isSubmitted ? "not-allowed" : "pointer",
                    opacity:
                      isSubmitted && !isCorrect && !isWrongSelection ? 0.6 : 1,
                  }}
                  onClick={() => !isSubmitted && checkAns(optionIndex)}
                >
                  {option}
                </Box>
              );
            })}

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
                  textTransform: "capitalize",
                  width: 80,
                }}
                onClick={handlePrev}
                disabled={index === 0}
              >
                Prev
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
                  textTransform: "capitalize",
                  width: 80,
                }}
                onClick={
                  index === questions.length - 1 ? handleSubmit : handleNext
                }
                disabled={index === questions.length - 1 && isSubmitted}
              >
                {index === questions.length - 1 && !isSubmitted
                  ? "Submit"
                  : "Next"}
              </Button>
            </Box>

            {isExplanation && question?.explanation && (
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>Explanation</Typography>
                <Typography sx={{ lineHeight: 2 }}>
                  {question.explanation}
                </Typography>
              </Box>
            )}
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Info
              questions={questions}
              index={index}
              isSubmitted={isSubmitted}
              answers={answers}
              setIsExplanation={setIsExplanation}
              score={score}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Quiz;
