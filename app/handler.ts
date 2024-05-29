import {APIGatewayProxyEventV2} from 'aws-lambda';

export const SignupHandler = async (event: APIGatewayProxyEventV2) => {
    console.log('SignupHandler called');
    return {
        statusCode: 200,
        headers : {
            'Allow-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({message: 'SignupHandler called'})
    };
};

