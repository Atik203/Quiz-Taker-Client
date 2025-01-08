import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const allExams = [
  { id: 1, name: "Web Development Fundamentals", duration: 60 },
  { id: 2, name: "Data Structures & Algorithms", duration: 90 },
  { id: 3, name: "Machine Learning Basics", duration: 75 },
  { id: 4, name: "Artificial Intelligence", duration: 80 },
  { id: 5, name: "Cyber Security", duration: 70 },
  { id: 6, name: "Cloud Computing", duration: 85 },
  { id: 7, name: "DevOps Essentials", duration: 65 },
  { id: 8, name: "Blockchain Basics", duration: 95 },
  { id: 9, name: "Software Testing", duration: 60 },
  { id: 10, name: "Database Management", duration: 70 },
  { id: 11, name: "Networking Fundamentals", duration: 80 },
  { id: 12, name: "Operating Systems", duration: 75 },
  { id: 13, name: "Cyber Forensics", duration: 85 },
  { id: 14, name: "Big Data Analytics", duration: 90 },
  { id: 15, name: "Internet of Things", duration: 65 },
];

const ITEMS_PER_PAGE = 9;

export default function Exams() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentExams = allExams.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[hsl(var(--background))] to-white">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--foreground))] mb-4">
            All Exams
          </h1>
          <p className="text-xl text-[hsl(var(--foreground))] mb-8">
            Browse through all available exams and start your learning journey
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentExams.map((exam) => (
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
                  to={`/login`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:bg-[hsl(var(--primary))] transition-colors"
                >
                  Start Exam
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>

        <div className="flex justify-center">
          <Pagination>
            {currentPage > 1 && (
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className="cursor-pointer"
              >
                Prev
              </PaginationPrevious>
            )}
            <PaginationContent>
              {Array.from({
                length: Math.ceil(allExams.length / ITEMS_PER_PAGE),
              }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                    className={`${
                      currentPage === index + 1 ? "bg-green-500 text-white" : ""
                    } flex items-center justify-center w-10 h-10 rounded-full`}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
            {currentPage < Math.ceil(allExams.length / ITEMS_PER_PAGE) && (
              <PaginationNext
                className="cursor-pointer"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </PaginationNext>
            )}
          </Pagination>
        </div>
      </main>
    </div>
  );
}
