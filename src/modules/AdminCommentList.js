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

                throw new Error(
                    payload.message || 'Unable to load comments'
                );
            }

            const payload = await response.json();

            console.log('Admin comments:', payload);

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

                const payload = await response
                    .json()
                    .catch(() => ({}));

                throw new Error(
                    payload.message || 'Unable to delete comment'
                );
            }

            // Remove deleted comment from UI
            setComments((current) =>
                current.filter(
                    (item) =>
                        String(item._id) !== String(id)
                )
            );

            setError('');

        } catch (error) {

            console.error(
                'Failed to delete comment:',
                error
            );

            setError(
                error.message ||
                'Unable to delete comment'
            );
        }
    };

    if (loading) {
        return (
            <div className="row m-1">
                <div className="col-12">
                    <p className="text-muted">
                        Loading comments...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="row m-1">

            {error && (
                <div className="col-12">
                    <div className="alert alert-danger">
                        {error}
                    </div>
                </div>
            )}

            {comments.length === 0 ? (

                <div className="col-12">
                    <p className="text-muted">
                        No comments yet.
                    </p>
                </div>

            ) : (

                <div className="col-12 table-responsive">

                    <table className="table table-striped admin-comments-table">

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

                                <tr
                                    key={
                                        comment._id ||
                                        index
                                    }
                                >

                                    <td>
                                        <strong>
                                            {comment.author}
                                        </strong>
                                    </td>

                                    <td>
                                        <i>
                                            {comment.email}
                                        </i>
                                    </td>

                                    <td>
                                        {comment.message}
                                    </td>

                                    <td>
                                        {comment.createdAt
                                            ? new Date(
                                                comment.createdAt
                                            ).toLocaleString()
                                            : '-'}
                                    </td>

                                    <td>

                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() =>
                                                handleDelete(
                                                    comment._id
                                                )
                                            }
                                        >
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