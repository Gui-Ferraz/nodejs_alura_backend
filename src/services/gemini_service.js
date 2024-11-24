import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

export default async function generateDescriptionGemini(imageBuffer) {
    const prompt = "Write a short description for the following image.";

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png"
            }
        };
        const res = await model.generateContent([prompt, image]);
        return res.response.text() || "Text not available.";
    } catch(exception) {
        console.error("Error trying to get alt-text:", exception.message, exception);
        throw new Error("Error trying to get alt-text from Gemini.");
    }
}