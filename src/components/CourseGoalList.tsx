import CourseGoal from './CourseGoal';
import { ICourseGoalListProps } from '../utils/types';

const CourseGoalList: React.FC<ICourseGoalListProps> = ({
  goals,
  onDelete,
}): JSX.Element => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
