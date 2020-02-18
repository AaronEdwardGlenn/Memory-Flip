const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.use('/api/v1/memoryflip', require('./routes/userRoutes'));
app.use('/api/v1/memoryflip/favorites', require('./routes/favoritesRoutes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
