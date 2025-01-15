'use client';

// import { Progress } from '@/components/ui/progress';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { getProblems } from '@/lib/get-problems';

// export default function ProgressBar({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
export default function ProgressBar() {
  const [completedQuestions] = useLocalStorage<number[]>('completedQuestions', []);
  const totalQuestions = getProblems();

  // const progress = totalQuestions.length ? (completedQuestions.length / totalQuestions.length) * 100 : 0;

  return (
    <div className="w-full  border-[#fff/10] rounded-md px-3 py-2 flex flex-row items-center justify-center flex-1 gap-2 bg-white/10 text-white">
      {/* <Progress value={progress} className="w-full h-2" /> */}
      <div className="text-xs text-center flex flex-row flex-none items-center justify-center gap-1">
        <div className="flex-shrink-0">
          {completedQuestions.length} /{totalQuestions.length}
        </div>
        <div>completed</div>
      </div>
    </div>
  );
}
