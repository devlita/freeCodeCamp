const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
        { /* Change code above this line */ }
      </div>
    );
  }
};
