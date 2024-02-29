import CourseGoal from './CourseGoal';
import { ICourseGoalListProps } from '../utils/types';
import InfoBox from './InfoBox';
import { type ReactNode } from 'react';

const CourseGoalList: React.FC<ICourseGoalListProps> = ({
  goals,
  onDelete,
}): JSX.Element => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You are collecting a lot of goals. Don't put too much on your plate.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
