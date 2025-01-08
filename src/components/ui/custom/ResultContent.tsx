import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { ExamData } from "./QuestionCard";

interface ResultsContentProps {
  examData: ExamData;
  userAnswers: number[];
}

export default function ResultsContent({
  examData,
  userAnswers,
}: ResultsContentProps) {
  const score = userAnswers.reduce((acc, answer, index) => {
    return acc + (answer === examData.questions[index].correctAnswer ? 1 : 0);
  }, 0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col md:flex-row  justify-between rounded-lg shadow-md p-6 mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-4">{examData.title}</h1>
          <h2 className="text-2xl font-semibold mb-4">
            Your Score: {score} / {examData.questions.length}
          </h2>
        </div>
        <div>
          <Link
            to={`/exam/1/certificate?answers=${userAnswers}`}
            target="_blank"
          >
            <CustomButton> Download Certificate</CustomButton>
          </Link>
        </div>
      </div>
      <div className="space-y-6 max-w-7xl mx-auto py-16">
        {examData.questions.map((question, index) => (
          <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">
              {index + 1}. {question.text}
            </h3>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`p-2 rounded-md ${
                    optionIndex === question.correctAnswer - 1
                      ? "bg-green-200 text-green-800"
                      : optionIndex === userAnswers[index] - 1 &&
                        userAnswers[index] !== 0
                      ? "bg-red-200 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {option}
                  {optionIndex === question.correctAnswer - 1 &&
                    " (Correct Answer)"}
                  {optionIndex === userAnswers[index] - 1 &&
                    optionIndex !== question.correctAnswer - 1 &&
                    userAnswers[index] !== 0 &&
                    " (Your Answer)"}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to={"/"}>
          <CustomButton>Return to Home</CustomButton>
        </Link>
      </div>
    </>
  );
}
