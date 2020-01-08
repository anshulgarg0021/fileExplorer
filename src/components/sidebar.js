import React,{Component} from 'react'
import './sidebar.css'
import List from '../components/List'
class sidebar extends Component {
    state = {
        lists: [
          { name: 'Song', id: 1 },
          { name: 'Movies',  id: 2 },
          { name: 'Videos',  id: 3 },
          { name: 'My Test Folder',  id: 4 },
          { name: 'Screenshots',  id: 5 }
        ],
    }
        render() {
    return(
        <div class="col">
         <aside class="col">
         </aside>
         <List lists={this.state.lists} />
        </div>
    )
}
}
export default sidebar;
