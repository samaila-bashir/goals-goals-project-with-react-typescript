import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { ICourseGoalList } from './utils/types';

const App = (): JSX.Element => {
  const [goals, setGoals] = useState<ICourseGoalList[]>([]);

  const image = {
    src: goalsImg,
    alt: 'A list of goals',
  };

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: ICourseGoalList = {
        id: Math.random(),
        title: 'Learn React + TS ' + Math.floor(Math.random() * 100) + 1,
        description: 'Learn it in depth.',
      };

      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    // const newGoals = goals.filter((goal) => goal.id !== id);
    // setGoals(newGoals);

    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={image}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
};

export default App;
