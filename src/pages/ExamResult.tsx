import ResultsContent from "@/components/ui/custom/ResultContent";
import { useSearchParams } from "react-router-dom";
import { examData } from "./SingleExam";

export default function ExamResult() {
  const [searchParams] = useSearchParams();
  const userAnswers = searchParams.get("answers")?.split(",").map(Number) || [];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Exam Results</h1>
        <ResultsContent examData={examData} userAnswers={userAnswers} />
      </div>
    </div>
  );
}
