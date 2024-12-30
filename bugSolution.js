const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const parsedUserId = parseInt(userId);
  if (isNaN(parsedUserId)) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parsedUserId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));