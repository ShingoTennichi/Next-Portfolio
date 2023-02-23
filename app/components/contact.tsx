import { useState } from "react";
import { PublishCommandOutput } from "@aws-sdk/client-sns";
import {
  UserInput,
  InputStatus,
  CHANGE_EVENT,
  USE_STATE_SETTER,
  Params,
} from "@/types/types";

const DEFAULT: string = "DEFAULT";
const SUCCESS: string = "SUCCESS";
const ERROR: string = "ERROR";

export default function Contact() {
  const [input, setInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
    status: {
      name: DEFAULT,
      email: DEFAULT,
      message: DEFAULT,
      sent: DEFAULT,
    },
  });

  return (
    <form className="md:max-w-2xl w-full md:m-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-800 border border-gray-600  text-sm rounded-lg block w-full p-2.5 outline-none"
          placeholder="e.g. Shingo Tennichi"
          value={input.name}
          onChange={(e) => handleInput(e, input, setInput)}
        />
        {input.status.name === DEFAULT ? (
          <span className="block h-5"></span>
        ) : input.status.name === SUCCESS ? (
          <p className="mt-1 text-xs text-green-400">Valid</p>
        ) : (
          // if ERROR
          <p className="mt-1 text-xs text-red-500">
            Invalid Input: input your name
          </p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="bg-gray-800 border border-gray-600  text-sm rounded-lg block w-full p-2.5 outline-none"
          placeholder="e.g. example@example.com"
          value={input.email}
          onChange={(e) => handleInput(e, input, setInput)}
        />
        {input.status.email === DEFAULT ? (
          <span className="block h-5"></span>
        ) : input.status.email === SUCCESS ? (
          <p className="mt-1 text-xs text-green-400">Valid</p>
        ) : (
          // if ERROR
          <p className="mt-1 text-xs text-red-500">
            Invalid Input: input your email
          </p>
        )}
      </div>

      <div className="w-full border border-gray-600 rounded-lg bg-gray-700">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-600">
          <div className="flex flex-wrap items-center sm:divide-x divide-gray-600">
            <p>Message</p>
          </div>
        </div>
        <div className="px-4 py-2 rounded-b-lg bg-gray-800">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows={8}
            className="bg-gray-800 border-gray-600 block w-full px-0 text-sm border-0 outline-none"
            placeholder="Message here"
            value={input.message}
            onChange={(e) => handleInput(e, input, setInput)}
          />
        </div>
      </div>
      {input.status.message === DEFAULT ? (
        <span className="block h-5 mb-4"></span>
      ) : input.status.message === SUCCESS ? (
        <p className="mt-1 text-xs text-green-400 mb-4">Valid</p>
      ) : (
        // if ERROR
        <p className="mt-1 text-xs text-red-500 mb-4">
          Invalid Input: input your email
        </p>
      )}
      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center bg-blue-800 rounded-lg hover:bg-blue-900 active:bg-gradient-to-r active:from-slate-200 active:to-sky-800"
        onClick={() => publishMessage(input, setInput)}
      >
        SEND
      </button>
      {input.status.sent === DEFAULT ? (
        <span className="block h-7"></span>
      ) : input.status.sent === SUCCESS ? (
        <p className="mt-2 text-sm text-green-400 mb-11">
          Your message has been successfully sent
        </p>
      ) : (
        // if ERROR
        <p className="mt-2 text-sm text-red-500 mb-11">
          Your message has not been sent
        </p>
      )}
    </form>
  );
}

function handleInput(
  e: CHANGE_EVENT,
  input: UserInput,
  SETTER: USE_STATE_SETTER<UserInput>
): void {
  const { id }: { id: string } = e.target;
  SETTER({
    ...input,
    [id]: e.target.value,
  });
}

async function publishMessage(
  input: UserInput,
  SETTER: USE_STATE_SETTER<UserInput>
): Promise<void> {
  const status: InputStatus = {
    name: input.name === "" ? ERROR : SUCCESS,
    email: input.email === "" ? ERROR : SUCCESS,
    message: input.message === "" ? ERROR : SUCCESS,
    sent: DEFAULT,
  };

  if (!isValid(status)) {
    status.sent = ERROR;
    SETTER({ ...input, status });
    return;
  }

  const params: Params = {
    name: input.name,
    email: input.email,
    message: input.message,
  };

  const response = await fetch("api/aws/sns-publish-to-topic-v3", {
    method: "POST",
    headers: {
      contentType: "application/json",
    },
    body: JSON.stringify(params),
  });

  const result: PublishCommandOutput = await response.json();

  if (result.$metadata.httpStatusCode === 200) {
    status.sent = SUCCESS;
    SETTER({ name: "", email: "", message: "", status });
  } else {
    status.sent = ERROR;
    SETTER({ ...input, status });
    throw new Error("Error");
  }
}

function isValid(status: InputStatus): boolean {
  return (
    status.name === SUCCESS &&
    status.email === SUCCESS &&
    status.message === SUCCESS
  );
}
