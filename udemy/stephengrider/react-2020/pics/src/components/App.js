import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"

class App extends React.Component {
  state = {
    images: [],
  };

  onSubmitSearch = async (term) => {
    const url = "/search/photos";
    const response = await unsplash.get(url, {
      params: {
        query: term,
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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
