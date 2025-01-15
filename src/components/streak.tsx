'use client';

export default function Streak() {
  const streak = getStreak();

  return (
    <span className="font-medium flex-shrink-0 px-2 py-1">
      🔥 {streak} day{streak > 1 ? 's' : ''} streak
    </span>
  );
}

export function getStreak(): number {
  if (typeof window === 'undefined') return 1; // Ensure this only runs on the client-side

  // Retrieve streak and last study date from localStorage
  const streak = parseInt(localStorage.getItem('streak') || '1');
  const lastStudyDate = localStorage.getItem('lastStudyDate');

  const today = new Date();
  if (lastStudyDate && new Date(lastStudyDate).toDateString() === today.toDateString()) {
    return streak; // If the last study date is today, return the current streak
  } else if (
    lastStudyDate &&
    new Date(lastStudyDate).toDateString() === new Date(today.getTime() - 86400000).toDateString()
  ) {
    return streak + 1; // If the last study date was yesterday, increment the streak
  } else {
    return 1; // Otherwise, reset the streak to 1
  }
}