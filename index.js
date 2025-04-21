const express = require('express');
const app = express();

// Get formatted UTC time
const getUTCTime = () => {
    return new Date().toISOString()
        .replace('T', ' ')
        .split('.')[0];
};

// Static HTML with exact timestamp format
const landingPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firekid-MD Session Selector</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: monospace;
            background: #1a1a1a;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            background: #2d2d2d;
            border-radius: 10px;
            padding: 30px;
            width: 100%;
            max-width: 600px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .info-box {
            background: #1a1a1a;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            font-family: monospace;
            white-space: pre-line;
        }

        .title {
            color: #4CAF50;
            text-align: center;
            margin-bottom: 30px;
            font-size: 24px;
        }

        .button {
            display: block;
            background: #4CAF50;
            color: white;
            text-decoration: none;
            padding: 15px 20px;
            border-radius: 8px;
            text-align: center;
            margin: 15px 0;
            transition: transform 0.2s;
        }

        .button:hover {
            transform: translateY(-2px);
        }

        .button.secondary {
            background: #2196F3;
        }

        .divider {
            height: 2px;
            background: linear-gradient(to right, transparent, #4CAF50, transparent);
            margin: 25px 0;
        }

        .footer {
            text-align: center;
            color: #888;
            margin-top: 20px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="title">Firekid-MD Session Selector</h1>

        <div class="info-box">
Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): ${getUTCTime()}
Current User's Login: FireKid846</div>

        <a href="https://firekid-session.vercel.app" class="button">Main Session Generator</a>
        <a href="https://firekid-session.onrender.com" class="button secondary">Backup Generator #1</a>
        <a href="https://firekid-session.herokuapp.com" class="button secondary">Backup Generator #2</a>

        <div class="divider"></div>

        <div class="info-box">Quick Guide:
1. Click any generator link above
2. Scan QR code or enter phone number
3. Get session ID in WhatsApp</div>

        <div class="footer">
            Created by FireKid846
            <br>Last Updated: ${getUTCTime()}
        </div>
    </div>

    <script>
        // Update UTC time every second
        setInterval(() => {
            const time = new Date().toISOString().replace('T', ' ').split('.')[0];
            document.querySelector('.info-box').innerHTML = 
                'Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): ' + time + 
                '\\nCurrent User\\'s Login: FireKid846';
        }, 1000);
    </script>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(landingPage);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});

module.exports = app;
