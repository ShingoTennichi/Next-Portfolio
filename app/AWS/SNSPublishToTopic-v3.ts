import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { SNSClient, PublishCommand, PublishCommandInput, PublishCommandOutput } from '@aws-sdk/client-sns';

const snsClient: SNSClient = new SNSClient({
    region: 'us-east-2',
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: 'us-east-2' }),
        identityPoolId: 'us-east-2:8f6af294-dd56-4b2f-877c-8fe8dc9e08ba'
    })
});
var params = {
  Message: "MESSAGE_TEXT", // MESSAGE_TEXT
  TopicArn: "arn:aws:sns:us-east-2:237600839617:ContactMe", //TOPIC_ARN
};

// console.log(snsClient);

const PublishToTopic = async(params: PublishCommandInput): Promise<PublishCommandOutput | undefined>  => {
    try{
        const data: PublishCommandOutput = await snsClient.send(new PublishCommand(params));
        // console.log('Success', data);
        return data;
    } catch(error) {
        // console.log('error', error);
    }
};

// const PublishToTopic = async (): Promise<PublishCommandOutput | undefined> => {
//   try {
//     const data = await snsClient.send(new PublishCommand(params));
//     console.log("Success.",  data);
//     return data; // For unit tests.
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

export default PublishToTopic;