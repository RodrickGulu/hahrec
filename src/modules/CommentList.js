import React, { useEffect, useState } from 'react';
import '../css/comments.css';

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/comments'
        );

        if (!response.ok) {
          throw new Error('Unable to load comments');
        }

        const payload = await response.json();

        setComments(payload.comments || []);

      } catch (error) {
        console.error(
          'Failed to load comments:',
          error
        );

        setComments([]);
      }
    };

    loadComments();
  }, []);


  if (comments.length === 0) {
    return (
      <div className="comments">

        <div className="comments-empty">

          <div className="empty-icon">
            💬
          </div>

          <h3>No comments yet</h3>

          <p>
            Be the first to share your thoughts!
          </p>

        </div>

      </div>
    );
  }


  return (
    <div className="comments">

      <div className="comments-header">

        <h2>What People Are Saying</h2>

        <p>
          See what our clients and visitors have to say.
        </p>

      </div>


      <div className="comments-list">

        {comments.map((comment, index) => (

          <article
            className="comment-card"
            key={comment.id || index}
          >

            {/* Author Section */}

            <div className="comment-author">

              <div className="author-avatar">

                {comment.author
                  ? comment.author.charAt(0).toUpperCase()
                  : '?'
                }

              </div>


              <div className="author-details">

                <h3>
                  {comment.author || 'Anonymous'}
                </h3>

                {comment.email && (
                  <span className="comment-email">
                    {comment.email}
                  </span>
                )}

              </div>

            </div>


            {/* Comment */}

            <div className="comment-body">

              <p>
                {comment.message}
              </p>

            </div>

          </article>

        ))}

      </div>

    </div>
  );
}

export default CommentList;