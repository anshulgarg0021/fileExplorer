import React from 'react';
import './List.css'
const List = ({lists}) => {
    return (
      <div className="post">
        {
          lists.map(ninja => {
            return (
              <div className="postname" key={ninja.id}>
                <div>{ ninja.name }</div>
              </div>
            )
          })
        }
      </div>
    );
  }

  export default List