import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = async (event) => {
    event.preventDefault();
    const term = this.state.term;
      this.props.onTermSubmit(term);
  };

    render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onInputChange} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Enter text here"
              onChange={(event) => {
                this.setState({
                  term: event.target.value,
                });
              }}
            />
          </div>
            </form>
      </div>
    );
  }
}

export default SearchBar;
