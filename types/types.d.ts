import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { PublishCommandInput, PublishCommandOutput } from "@aws-sdk/client-sns";

export type UserInput = {
  name: string;
  email: string;
  message: string;
  status: InputStatus;
};

export type InputStatus = {
  name: string;
  email: string;
  message: string;
  sent: string;
};

export type Params = {
  name: string;
  email: string;
  message: string;
};

export type CHANGE_EVENT =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

export type USE_STATE_SETTER<T> = Dispatch<SetStateAction<T>>;
