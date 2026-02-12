import clsx from "clsx";
import { CheckIcon } from "@heroicons/react/24/outline";
import { markAnswer } from "@/lib/actions";
import type { Answer as AnswerType } from "@/lib/definitions";

type Props = {
  answer: AnswerType;
  questionId: string;
  isAccepted: boolean;
};

export default function Answer({ answer, questionId, isAccepted }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b",
        {
          "bg-green-50": isAccepted,
        }
      )}
    >
      <div className="mr-4">
        {isAccepted ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
            <CheckIcon className="w-5" />
          </div>
        ) : (
          <form action={markAnswer}>
            <input type="hidden" name="question_id" value={questionId} />
            <input type="hidden" name="answer_id" value={answer.id} />
            <button
              type="submit"
              title="Mark as accepted"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:border-green-500 hover:text-green-500"
            >
              <CheckIcon className="w-5" />
            </button>
          </form>
        )}
      </div>
      <p className="w-full text-left">{answer.answer}</p>
    </div>
  );
}
