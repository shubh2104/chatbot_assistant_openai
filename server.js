const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/message', (req, res) => {
    const userInput = req.body.message;

    const pythonProcess = spawn('python', ['chatbot.py']);

    let responseData = '';
    pythonProcess.stdout.on('data', (data) => {
        responseData += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        res.json({ response: responseData.trim() });
    });

    pythonProcess.stdin.write(`${userInput}\n`);
    pythonProcess.stdin.end();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
