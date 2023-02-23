import { NextApiRequest, NextApiResponse } from "next";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import {
  SNSClient,
  PublishCommand,
  PublishCommandInput,
  PublishCommandOutput,
} from "@aws-sdk/client-sns";
import { Params } from "@/types/types";

const snsClient: SNSClient = new SNSClient({
  region: "us-east-2",
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: "us-east-2" }),
    identityPoolId: "us-east-2:8f6af294-dd56-4b2f-877c-8fe8dc9e08ba",
  }),
});

export default async function PublishToTopic(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message }: Params = JSON.parse(req.body);
  const params: PublishCommandInput = {
    TopicArn: process.env.NEXT_PUBLIC_TOPIC_ARN,
    Subject: "Portfolio Contact Form",
    Message: "Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message,
  };
  try {
    const data: PublishCommandOutput = await snsClient.send(
      new PublishCommand(params)
    );
    res.json(data);
  } catch (error) {
    throw new Error("Error");
    // console.log('error', error);
  }
}
