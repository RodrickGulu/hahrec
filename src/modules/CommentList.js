// CommentList.js
import React, { useEffect, useState } from 'react';

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Retrieve comments from local storage when the component mounts
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  return (
    <div className='comments row m-1'>
          <table>
            {comments.map((comment, index) => (
              <tr key={index}>
                <td>
                  <strong className='display-6'>{comment.author}</strong>
                  <p>{comment.message}</p>
                </td>
              </tr>
            ))}
          </table>
    </div>
  );
}

export default CommentList;
