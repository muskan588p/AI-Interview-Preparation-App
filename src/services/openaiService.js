import OpenAI from "openai";

const client =new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are an expert interview question generator. Only ask technical interview questions about software engineering topics.
No off-topic or general life content.
Ask one question at a time, wait for user answer, then follow up.`;

export async function generateQuestion({topic, difficulty, history=[]}) {
    const diffHint={
        Easy: "Beginner level, basic concepts",
        Medium : "balanced conceptual + practical",
        Hard: "deep tricky, implementation focused"
    }[difficulty] || "balanced";

    const messages = [
        {role:'system', content:SYSTEM_PROMPT},
        {role:'user', content:` Topic: ${topic}\nDifficulty: ${difficulty} (${diffHint}).\nGenerate the next interview question only.` },
        ...history
    ];

    const resp=await client.chat.completions.create({
        model:'gpt-4o-mini',
        messages,
        temperature: 0.4,
    });

    const text = resp.choices[0].message.content.trim() || 'Describe Hoisting in JavaScript with a short example.'; 
    return text;
}