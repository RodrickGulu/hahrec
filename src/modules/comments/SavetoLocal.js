import React from 'react'

export default function SavetoLocal(comment) {
    const existingComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Add the new comment to the array
    existingComments.push(comment);
  
    // Store the updated comments array back in localStorage
    localStorage.setItem('comments', JSON.stringify(existingComments));
}
