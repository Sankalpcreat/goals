import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';
import Goal from './components/Goals';


const base = new Airtable({ apiKey: "keyEP6c1K2Lto5Ac5" }).base('applgZgn4MRAGqXFi');

function App() {
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setGoals(records);
        fetchNextPage();
      });
    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>

      <h1>My Goals</h1>
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          goal={goal}
          updates={updates.filter(
            (update) => (update.fields.goalid[0] === goal.id)
          )}
        />
      ))}
    </>
  );
}

export default App;

