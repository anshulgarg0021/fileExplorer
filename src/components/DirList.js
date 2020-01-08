import React from 'react';
import './DirList.css'
const DirList = ({dirlists}) => {
    return (
      <div className="post">
        {
          dirlists.map(ninja => {
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

  export default DirList