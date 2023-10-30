import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

export const foo = async () =>
{
    try
    {
        const res = await axios.get("/foo");
        return res;
    } catch (err)
    {
        console.log(err)
    }
}
