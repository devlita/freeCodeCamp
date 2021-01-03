class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    // Bind function
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {
    this.setState({
      input: '',
      messages: this.state.messages.concat(this.state.input)
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input 
          onChange = {this.handleChange} 
          value = {this.state.input}
        />

        <button onClick = {this.submitMessage}>
          Add message
        </button>

        <ul>
          {this.state.messages.map(
            msg => <li>{msg}</li>
          )}
        </ul>

        { /* change code above this line */ }
      </div>
    );
  }
};
