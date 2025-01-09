import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AnswerTracker from "./AnswerTracker";
import CustomButton from "./CustomButton";
import QuestionCard, { ExamData } from "./QuestionCard";

interface ExamContentProps {
  examData: ExamData;
}

export default function ExamContent({ examData }: ExamContentProps) {
  const { t } = useTranslation();

  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(examData.questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(examData.duration * 60); // duration in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit(true);
          toast.error(
            "Time is over. Your answers have been submitted automatically."
          );
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (questionId: number, selectedOption: number) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionId - 1] = selectedOption; // Store as 1-based index
      return newAnswers;
    });
  };

  const handleSubmit = (isTimeOver = false) => {
    const finalAnswers = userAnswers.map((answer) =>
      answer === null ? 0 : answer
    );
    navigate(`/exam/1/result?answers=${finalAnswers.join(",")}`);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="grid max-w-7xl mx-auto py-16 grid-cols-1 justify-center md:grid-cols-4 gap-8">
      <div className="md:col-span-3 space-y-8">
        {examData.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            selectedOption={userAnswers[question.id - 1]} // Compare as 1-based index
            onSelectOption={handleAnswerSelect}
            questionNumber={index + 1}
          />
        ))}
      </div>
      <div className="md:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {t("exams.time_left")}: {formatTime(timeLeft)}
          </h2>
        </div>
        <AnswerTracker
          totalQuestions={examData.questions.length}
          answeredQuestions={userAnswers}
        />
        <CustomButton className="w-full" onClick={() => handleSubmit(false)}>
          {t("exams.submit_exam")}
        </CustomButton>
      </div>
    </div>
  );
}
