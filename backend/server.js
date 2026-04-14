const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Nova-Tasks API is running');
});

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// =====================
// START SERVER
// =====================
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});