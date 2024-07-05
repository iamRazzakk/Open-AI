// src/apiService.js
import axios from 'axios';

const apiKey = 'FoDPLCSljtSnWryoOUssT3BlbkFJNLLhfZJ8YWaCZmSxl3Kl';

export const fetchChatGPTResponse = async (prompt) => {
    const data = {
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: 50
    };

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    };

    try {
        const res = await axios.post('https://api.openai.com/v1/completions', data, { headers });
        return res.data.choices[0].text;
    } catch (error) {
        console.error('Error fetching response:', error.response ? error.response.data : error.message);
        throw new Error('Error fetching response from API');
    }
};
