export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface ExamData {
  id: number;
  title: string;
  questions: Question[];
  duration: number;
  cost: number;
}

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (questionId: number, optionIndex: number) => void;
  questionNumber: number;
}

export default function QuestionCard({
  question,
  selectedOption,
  onSelectOption,
  questionNumber,
}: QuestionCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        {questionNumber}. {question.text}
      </h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={index + 1} // Store as 1-based index
              checked={selectedOption === index + 1} // Compare as 1-based index
              onChange={() => onSelectOption(question.id, index + 1)} // Pass as 1-based index
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
