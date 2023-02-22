import { ChangeEvent, useState } from "react";
import { PublishCommandInput } from "@aws-sdk/client-sns";
import PublishToTopic from "../AWS/SNSPublishToTopic-v3";

type UserInput = {
  name: string,
  email: string,
  message: string,
  status: {
    name: string,
    email: string,
    message: string,
    sent: boolean
  }
};

export default function Contact() {
  const [input, setInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
    status: {
      name: "",
      email: "",
      message: "",
      sent: false
    }
  });

  const publishMessage = (): void => {
    if(!input.name || !input.email || !input.message) {
      setInput(prev => {
        return {
          ...prev,
          status: {
            name: input.name === "" ? "error" : "success",
            email: input.email === "" ? "error" : "success",
            message: input.message === "" ? "error" : "success",
            sent: false
          }
        }
      })
      return;
    }
    const params: PublishCommandInput = {
      TopicArn: process.env.NEXT_PUBLIC_TOPIC_ARN,
      Subject: "Portfolio Contact Form",
      Message:
        "Name: " + input.name +
        "\nEmail: " + input.email +
        "\nMessage:\n" + input.message,
    };
    PublishToTopic(params);
    setInput({
      name: "",
      email: "",
      message: "",
      status: {
        name: "success",
        email: "success",
        message: "success",
        sent: true
      }
    });
  };

  function handleInput(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void {
    const { id } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [id]: e.target.value,
      };
    });
  }
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
          onChange={(e) => handleInput(e)}
        />
        {
        input.status.name === ""
        ? <span className="block h-5"></span>
        : input.status.name === "success"
        ? <p className="mt-1 text-xs text-green-400">Valid</p>
        : <p className="mt-1 text-xs text-red-500">Invalid Input: input your name</p>
        }
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
          onChange={(e) => handleInput(e)}
        />
        {
        input.status.email === ""
        ? <span className="block h-5"></span>
        : input.status.email === "success"
        ? <p className="mt-1 text-xs text-green-400">Valid</p>
        : <p className="mt-1 text-xs text-red-500">Invalid Input: input your email</p>
        }
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
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
          {
          input.status.message === ""
          ? <span className="block h-5 mb-4"></span>
          : input.status.message === "success"
          ? <p className="mt-1 text-xs text-green-400 mb-4">Valid</p>
          : <p className="mt-1 text-xs text-red-500 mb-4">Invalid Input: input your email</p>
          }
      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center bg-blue-800 rounded-lg hover:bg-blue-900 active:bg-gradient-to-r active:from-slate-200 active:to-sky-800"
        onClick={() => publishMessage()}
      >
        SEND
      </button>
      {
        input.status.sent
        ? <p className="mt-2 text-sm text-green-400 mb-11">Your message has been successfully sent</p>
        : <span className="block h-7"></span>
      }
    </form>
  );
}