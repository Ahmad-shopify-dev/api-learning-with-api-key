import { v4 as uuidv4 } from 'uuid';

export const generateApiKey = () => {
    const apiKey = `stack_${uuidv4()}`;
    return apiKey
}


