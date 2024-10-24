import React, { useState } from 'react';
import { TextField, Button, Rating, Box } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CloseIcon from '@mui/icons-material/Close';

function FeedbackForm({ Close }) {
  const [feedback, setFeedback] = useState('');  // State to store feedback text
  const [rating, setRating] = useState(0);  // State to store rating value

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if feedback or rating is empty
    if (!feedback.trim()) {
      alert("Feedback cannot be empty.");
      return;
    }

    if (rating === 0) {
      alert("Please provide a rating.");
      return;
    }

    // Log feedback and rating values (or send them to a server)
    console.log('Form submitted');
    console.log('Feedback:', feedback);
    console.log('Rating:', rating);

    // Reset the form after submission
    setFeedback('');
    setRating(0);

    // Close the modal
    Close();
  };

  return (
    <div className="con-modal">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '400px',
          margin: 'auto',
          backgroundColor: 'white',
          paddingLeft: '20px',
          paddingRight: '20px',
          position: 'relative'
        }}
      >

        {/* Feedback form header with icon */}
        <h1>
          <FeedbackIcon fontSize="larger" />
        </h1>

        {/* Rating input */}
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />

        {/* Feedback text input */}
        <TextField
          label="Your Feedback"
          multiline
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          variant="outlined"
          fullWidth
        />

        {/* Submit button */}
        <Button type="submit" variant="contained" color="primary">
          Submit Feedback
        </Button>

        <div className="btn-detail">
                    <button type="button" className="btn" onClick={Close}>
                        <CloseIcon />
                    </button>
                </div>
      </Box>
    </div>
  );
}

export default FeedbackForm;
