const { spawn } = require('child_process');
require('dotenv').config();

// Function to run the Python script
function runPythonScript() {
    const pythonProcess = spawn('python', ['chatbot.py']);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

// Start the chatbot
runPythonScript();
