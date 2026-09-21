import { render, screen, waitFor } from '@testing-library/react';
import AdminCommentList from './AdminCommentList';

describe('AdminCommentList', () => {
  const mockFetch = jest.fn();

  beforeEach(() => {
    mockFetch.mockReset();
    global.fetch = mockFetch;
  });

  it('loads comments after login with the admin bearer token', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        comments: [
          {
            _id: 'comment-1',
            author: 'Jane Doe',
            email: 'jane@example.com',
            message: 'The studio experience was amazing.',
            createdAt: '2024-01-01T00:00:00.000Z'
          }
        ]
      })
    });

    const { rerender } = render(<AdminCommentList authToken="" />);

    expect(screen.getByText('Authentication required to view comments.')).toBeInTheDocument();

    rerender(<AdminCommentList authToken="admin-token" />);

    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://hahrec-backend.onrender.com/api/admin/comments',
      expect.objectContaining({
        headers: {
          Authorization: 'Bearer admin-token'
        }
      })
    );
  });
});
