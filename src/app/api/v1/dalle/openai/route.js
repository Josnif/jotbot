import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export const GET = async (req, res) => {
    return new Response('this is working');
};

export const POST = async (req) => {
    try {
        const { prompt } = await req.json();

        const aiResponse = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        })

        const image = aiResponse.data.data[0].b64_json;

        const resData = {
            photo: image
        }

        return new Response(JSON.stringify(resData), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response(error?.response.data.error.message, {status: 500});
    }
}