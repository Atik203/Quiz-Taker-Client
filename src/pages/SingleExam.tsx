import ExamContent from "@/components/ui/custom/ExamContent";
import { ExamData } from "@/components/ui/custom/QuestionCard";

export const examData: ExamData = {
  id: 1,
  title: "Web Development Fundamentals",

  duration: 1,
  questions: [
    {
      id: 1,
      text: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyperlink and Text Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      text: "Which of the following is not a valid CSS property?",
      options: ["color", "font-size", "text-style", "background-color"],
      correctAnswer: 2,
    },
    {
      id: 3,
      text: "What is the correct way to comment out multiple lines in JavaScript?",
      options: [
        "// This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */",
        "# This is a comment",
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      text: "Which HTTP method is used to send data to a server to create or update a resource?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: 1,
    },
    {
      id: 5,
      text: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Program Integration",
        "Automated Protocol Interaction",
        "Application Protocol Interface",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      text: "Which of the following is not a JavaScript framework or library?",
      options: ["React", "Angular", "Vue", "Java"],
      correctAnswer: 3,
    },
    {
      id: 7,
      text: "What is the purpose of the 'alt' attribute in an HTML image tag?",
      options: [
        "To specify the image source",
        "To provide alternative text for the image",
        "To set the image dimensions",
        "To add a border to the image",
      ],
      correctAnswer: 1,
    },
    {
      id: 8,
      text: "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "font-color", "color", "text-style"],
      correctAnswer: 2,
    },
    {
      id: 9,
      text: "What does the 'typeof' operator in JavaScript return for an array?",
      options: ["array", "object", "list", "collection"],
      correctAnswer: 1,
    },
    {
      id: 10,
      text: "Which of the following is not a valid way to declare a variable in JavaScript?",
      options: [
        "var x = 5;",
        "let y = 10;",
        "const z = 15;",
        "variable w = 20;",
      ],
      correctAnswer: 3,
    },
  ],
};

const SingleExam = () => {
  return (
    <div>
      <ExamContent examData={examData} />
    </div>
  );
};

export default SingleExam;
