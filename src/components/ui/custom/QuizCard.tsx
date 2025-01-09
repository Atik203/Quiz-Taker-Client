import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const QuizCard = ({ exam }) => {
  const { t } = useTranslation();

  return (
    <Card
      key={exam.id}
      className="transition-transform hover:scale-105 bg-gray-100 shadow-md flex flex-col justify-between"
    >
      <div>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-[hsl(var(--card-foreground))]">
            {exam.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center text-[hsl(var(--card-foreground))] mb-6">
          <ClockIcon className="w-5 h-5 mr-2" />
          <span>{exam.duration} minutes</span>
        </CardContent>
      </div>
      <CardFooter>
        <Link
          to={`/exam/1`}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:bg-[hsl(var(--primary))] transition-colors"
        >
          {t("start_exam")}
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
