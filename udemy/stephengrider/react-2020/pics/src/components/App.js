import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    images: [],
  };

  constructor() {
    super();
  }

  onSubmitSearch = async (term) => {
    const url = "https://api.unsplash.com/search/photos";
    const response = await axios.get(url, {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID lfYlW1SGjbu2cR5y9nlhtBEHhDbve28GmIVKvClvlPw",
      },
    });
    this.setState({
      images: response.data.results,
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmitSearch} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
