import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
    isEmpty: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: true
    });
  };

  handleChange = e => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true
      });
    }
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          />
          <button>Wyślij</button>
        </form>
        <Prompt
          when={!this.state.isEmpty}
          message="Czy na pewno chcesz opuścić tą stronę"
        />
      </div>
    );
  }
}
export default ContactPage;
