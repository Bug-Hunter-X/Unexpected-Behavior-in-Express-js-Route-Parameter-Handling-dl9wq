const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database interaction to fetch user data using the validated userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});