import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import { useState } from 'react';

interface ICourseGoal {
  id: number;
  title: string;
  description: string;
}

const App = () => {
  const [goals, setGoals] = useState<ICourseGoal[]>([]);

  const image = {
    src: goalsImg,
    alt: 'A list of goals',
  };

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: ICourseGoal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth.',
      };

      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={image}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
