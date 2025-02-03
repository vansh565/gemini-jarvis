const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.post('/gemini', async (req, res) => {
    const { prompt } = req.body;
    const basePrompt = `
      speak only 2 lines   
        User Question: {question}`;

    const MyPrompt = basePrompt.replace('{question}', prompt);

    try {
        const genAI = new GoogleGenerativeAI("AIzaSyD2eKhcIIS33G7uuvjA3VkI93bun_aELvQ");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(MyPrompt);
        //console.log(result.response.text());
        text = result.response.text();
        res.json({ text: text || 'kya bhok raha maadaltod' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'kya bak raha hai maadaltod' });
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
