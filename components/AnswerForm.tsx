import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function AnswerForm() {
  return (
    <form className="relative my-8">
      <div className="flex flex-row gap-2">
        <textarea
          name="answer"
          placeholder="Type your answer here..."
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500 h-[100px]"
          required
        />
        <button
          type="submit"
          className="flex h-[100px] w-14 items-center justify-center rounded-md border bg-secondary text-white focus:bg-secondary"
        >
          <PaperAirplaneIcon className="w-6" />
        </button>
      </div>
    </form>
  );
}
