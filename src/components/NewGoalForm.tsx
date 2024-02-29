import { useRef, type FormEvent } from 'react';
import { INewGoal } from '../utils/types';

const NewGoalForm: React.FC<INewGoal> = ({ onAddGoal }): JSX.Element => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSumit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enterdSummary = goal.current!.value;

    e.currentTarget.reset();
    onAddGoal(enteredGoal, enterdSummary);
  };

  return (
    <form onSubmit={handleSumit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Your Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoalForm;
