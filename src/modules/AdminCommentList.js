import React, { useCallback, useEffect, useState } from 'react';

export default function AdminCommentList({ authToken }) {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const loadComments = useCallback(async () => {
        if (!authToken) {
            setComments([]);
            setError('Authentication required to view comments.');
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError('');

            const response = await fetch(
                'https://hahrec-backend.onrender.com/api/admin/comments',
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                }
            );

            if (!response.ok) {
                const payload = await response.json().catch(() => ({}));
                throw new Error(payload.message || 'Unable to load comments');
            }

            const payload = await response.json();
            setComments(payload.comments || []);
        } catch (error) {
            console.error('Failed to load admin comments:', error);
            setError(error.message || 'Unable to load comments');
            setComments([]);
        } finally {
            setLoading(false);
        }
    }, [authToken]);

    useEffect(() => {
        loadComments();
    }, [loadComments]);

    const handleDelete = async (id) => {
        if (!authToken) {
            setError('Authentication required to delete comments.');
            return;
        }

        try {
            const response = await fetch(
                `https://hahrec-backend.onrender.com/api/admin/comments/${id}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (!response.ok) {
                const payload = await response.json().catch(() => ({}));
                throw new Error(payload.message || 'Unable to delete comment');
            }

            setComments((current) => current.filter((item) => String(item._id) !== String(id)));
            setError('');
        } catch (error) {
            console.error('Failed to delete comment:', error);
            setError(error.message || 'Unable to delete comment');
        }
    };

    if (!authToken) {
        return (
            <div className='admin-lock-state'>
                <strong>Comments are locked.</strong>
                <p>Sign in with an admin account to review and moderate guest feedback.</p>
            </div>
        );
    }

    if (loading) {
        return <p className='text-muted'>Loading comments...</p>;
    }

    return (
        <div className='admin-data-table'>
            {error && <div className='admin-alert admin-alert-error'>{error}</div>}

            {comments.length === 0 ? (
                <p className='text-muted'>No comments yet.</p>
            ) : (
                <div className='table-responsive'>
                    <table className='table table-striped admin-comments-table'>
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((comment, index) => (
                                <tr key={comment._id || index}>
                                    <td><strong>{comment.author}</strong></td>
                                    <td><em>{comment.email}</em></td>
                                    <td>{comment.message}</td>
                                    <td>{comment.createdAt ? new Date(comment.createdAt).toLocaleString() : '-'}</td>
                                    <td>
                                        <button className='admin-danger-btn' onClick={() => handleDelete(comment._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
