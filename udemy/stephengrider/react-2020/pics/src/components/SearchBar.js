import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  state = {
    term: "",
  };

  onSubmitForm(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  onClickChange(event) {
    console.log("click has been done", event);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // onClick={this.onClickChange}
              value={this.state.term}
              onChange={this.onInputChange}
              // onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
