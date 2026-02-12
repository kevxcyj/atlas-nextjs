import { fetchQuestion, fetchAnswers } from "@/lib/data";
import AnswerForm from "@/components/AnswerForm";
import Answer from "@/components/Answer";
import { HashtagIcon } from "@heroicons/react/24/outline";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await fetchQuestion(id);
  const answers = await fetchAnswers(id);

  if (!question) {
    return <div>Question not found</div>;
  }

  const acceptedAnswer = answers.find((a) => a.id === question.answer_id);
  const otherAnswers = answers.filter((a) => a.id !== question.answer_id);
  const sortedAnswers = acceptedAnswer
    ? [acceptedAnswer, ...otherAnswers]
    : otherAnswers;


  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-3xl font-black flex items-center mb-8">
        <HashtagIcon className="h-6 w-6 mr-2" /> {question.title}
      </h1>
      
      {/* Pass question.id to the form so we know which question to answer */}
      <AnswerForm questionId={question.id} />

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Answers</h2>
        <div className="flex flex-col">
          {sortedAnswers.map((answer) => (
            <Answer
              key={answer.id}
              answer={answer}
              questionId={question.id}
              isAccepted={question.answer_id === answer.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}