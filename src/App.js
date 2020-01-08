import React,{Component} from 'react';
import './App.css';
import Sidebars from './components/sidebar'
import DirList from './components/DirList'
import SearchField from "react-search-field";
class App extends Component {
  state = {
    dirlists: [
      { name: 'Song', id: 1 },
      { name: 'Movies',  id: 2 },
      { name: 'Videos',  id: 3 },
      { name: 'My Test Folder',  id: 4 },
      { name: 'Screenshots',  id: 5 }
    ]
  }
  render() {
  return (
    <div className="App">
    <Sidebars />
    <SearchField placeholder="Search..." classNames="test-class"/>
    <div className="App">
     <DirList dirlists={this.state.dirlists} />
      </div>
    </div>
  );
}
}
export default App;
