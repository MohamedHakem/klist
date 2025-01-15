import AlgorithmsIcon from './icons/algorithms-icon';
import ProgressBar from './progress-bar';
import Streak from './streak';

export default function Header() {
  return (
    <div className="w-full bg-[#5d6f78] text-white">
      <div className="mx-auto max-w-3xl px-4 py-1 flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <AlgorithmsIcon size="46" fill={'#fff'} stroke={'#5d6f78'} />
          <h1 className="text-2xl font-semibold text-white">Klist</h1>
        </div>
        <div className="flex items-center gap-2 text-sm">
          {/* <ProgressBar hideOnMobile /> */}
          <ProgressBar />
          <Streak />
        </div>
      </div>
    </div>
  );
}
