import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { Link } from "react-router-dom";

const featuredExams = [
  { id: 1, name: "Web Development Fundamentals", duration: 60 },
  { id: 2, name: "Data Structures & Algorithms", duration: 90 },
  { id: 3, name: "Machine Learning Basics", duration: 75 },
  { id: 4, name: "Artificial Intelligence", duration: 80 },
  { id: 5, name: "Cyber Security", duration: 70 },
  { id: 6, name: "Cloud Computing", duration: 85 },
  // { id: 7, name: "DevOps Essentials", duration: 65 },
  // { id: 8, name: "Blockchain Basics", duration: 95 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--background))] to-white">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-4">
            Master Your Skills with Quiz Taker
          </h1>
          <p className="text-xl text-[hsl(var(--foreground))] mb-8">
            Take expert-curated exams and boost your knowledge in various fields
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredExams.map((exam) => (
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
                  to={`/exam/${exam.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:bg-[hsl(var(--primary))] transition-colors"
                >
                  Start Exam
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>

        <div className="text-center">
          <Link
            to="/exams"
            className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:bg-[hsl(var(--primary))] transition-colors text-lg font-semibold"
          >
            Show All Exams
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </main>
    </div>
  );
}
