export function createToggleCompleted(
  setCompletedQuestions: (value: number[] | ((prev: number[]) => number[])) => void
) {
  return function (id: number, completed: boolean) {
    setCompletedQuestions((prev: number[]) =>
      completed ? [...new Set([...prev, id])] : prev.filter((qId) => qId !== id)
    );
  };
}
