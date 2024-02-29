import { ReactNode } from 'react';

interface CourseGoalProps {
  title: string;
  children: ReactNode;
}

const CourseGoal = ({ title, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>Title: {title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
