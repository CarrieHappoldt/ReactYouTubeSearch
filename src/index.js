import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetails from './components/video_details'
const API_KEY = "AIzaSyASN64kg02qIxiC2nUoZ8rz8xqklwFaztc";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      videos: [], 
      selectedVideo: null
    }  

    this.videoSearch("cute cats")
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => { //{ videos} === { videos: videos}
      this.setState({ 
        videos, 
        selectedVideo: videos[0]
      });
    });
  }


  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 500);

    return ( 
        <div>
          <SearchBar onSearchTermChange={videoSearch} /> 
          {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} />  */}
          <VideoDetails video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos}/>
        </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));