const data = 
[
  {
    test_name: "General Knowledge Test",
    description: "Test your general knowledge with these questions.",
    result: 0,
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        ans: 2,
        explanation: "Paris is the capital and most populous city of France.",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Mark Twain",
          "J.K. Rowling",
        ],
        ans: 1,
        explanation:
          "William Shakespeare wrote 'Romeo and Juliet', one of his most famous plays.",
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        ans: 2,
        explanation: "Jupiter is the largest planet in our solar system.",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "H2"],
        ans: 1,
        explanation: "The chemical symbol for water is H2O.",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet",
        ],
        ans: 1,
        explanation: "Leonardo da Vinci painted the Mona Lisa.",
      },
    ],
  },
  {
    test_name: "Science Quiz",
    description: "Challenge your science knowledge!",
    result: 0,
    questions: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Mercury", "Mars", "Jupiter", "Venus"],
        ans: 1,
        explanation:
          "Mars is known as the Red Planet due to its reddish appearance.",
      },
      {
        question: "What gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        ans: 1,
        explanation: "Plants absorb carbon dioxide during photosynthesis.",
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["100", "0", "50", "200"],
        ans: 0,
        explanation:
          "Water boils at 100 degrees Celsius under standard conditions.",
      },
      {
        question: "Which part of the cell contains genetic material?",
        options: ["Cytoplasm", "Nucleus", "Cell membrane", "Ribosome"],
        ans: 1,
        explanation: "The nucleus contains the cell's genetic material.",
      },
      {
        question: "What is the chemical formula for salt?",
        options: ["H2O", "NaCl", "CO2", "O2"],
        ans: 1,
        explanation: "The chemical formula for table salt is NaCl.",
      },
    ],
  },
  {
    test_name: "Math Quiz",
    description: "Sharpen your math skills!",
    result: 0,
    questions: [
      {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        ans: 2,
        explanation: "5 + 7 equals 12.",
      },
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        ans: 2,
        explanation: "The square root of 64 is 8.",
      },
      {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        ans: 2,
        explanation: "15% of 200 is 30.",
      },
      {
        question: "What is 9 × 9?",
        options: ["81", "72", "90", "99"],
        ans: 0,
        explanation: "9 × 9 equals 81.",
      },
      {
        question: "What is the value of π (pi) rounded to two decimal places?",
        options: ["3.14", "3.15", "3.16", "3.17"],
        ans: 0,
        explanation: "Pi (π) is approximately 3.14.",
      },
    ],
  },
  {
    test_name: "History Quiz",
    description: "How well do you know historical events?",
    result: 0,
    questions: [
      {
        question: "Who was the first president of the United States?",
        options: [
          "Abraham Lincoln",
          "George Washington",
          "Thomas Jefferson",
          "John Adams",
        ],
        ans: 1,
        explanation:
          "George Washington was the first president of the United States.",
      },
      {
        question: "In which year did World War II end?",
        options: ["1942", "1944", "1945", "1946"],
        ans: 2,
        explanation: "World War II ended in 1945.",
      },
      {
        question: "Who discovered America?",
        options: [
          "Christopher Columbus",
          "Marco Polo",
          "Vasco da Gama",
          "James Cook",
        ],
        ans: 0,
        explanation:
          "Christopher Columbus is credited with discovering America in 1492.",
      },
      {
        question: "Which empire was known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "Korea", "Mongolia"],
        ans: 1,
        explanation: "Japan is known as the 'Land of the Rising Sun'.",
      },
      {
        question:
          "What was the name of the ship that transported the Pilgrims to America?",
        options: ["Santa Maria", "Mayflower", "Victoria", "Endeavour"],
        ans: 1,
        explanation:
          "The Mayflower transported the Pilgrims to America in 1620.",
      },
    ],
  },
];

export default data;
