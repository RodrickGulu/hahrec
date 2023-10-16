import React, {useEffect, useState} from 'react'

export default function AdminCommentList() {
    const [comments, setComments] = useState([]);

  useEffect(() => {
    // Retrieve comments from local storage when the component mounts
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  return (
    <div className='row m-1'>
          <table>
            {comments.map((comment, index) => (
              <tr key={index}>
                <td>
                  <strong className='display-6'>{comment.author}</strong> - <i>{comment.email}</i>
                </td>
              </tr>
            ))}
          </table>
    </div>
  );
}
