import { ICourseGoal } from '../utils/types';

const CourseGoal: React.FC<ICourseGoal> = ({
  id,
  title,
  children,
  onDelete,
}): JSX.Element => {
  return (
    <article>
      <div>
        <h2>Title: {title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
