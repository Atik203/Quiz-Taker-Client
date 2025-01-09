"use client";

import { useTranslation } from "react-i18next";

interface AnswerTrackerProps {
  totalQuestions: number;
  answeredQuestions: (number | null)[];
}

export default function AnswerTracker({
  totalQuestions,
  answeredQuestions,
}: AnswerTrackerProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        {t("exams.answer_tracker")}
      </h2>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={`w-10 h-10 flex items-center justify-center rounded-md text-white font-semibold ${
              answeredQuestions[i] !== null ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
