import React from "react";
import { Button } from "../components/ui/button";

const Form = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="text-white font-semibold">
          Email
        </label>
        <input
          id="email"
          className="bg-transparent border-white/20 text-white/90 placeholder:text-white/50 mb-2 mt-2"
          placeholder="email@example.com"
        />
        <label className="text-sm text-white/50">
          This is your message display name.
        </label>
      </div>
      <div>
        <label htmlFor="message" className="text-white">
          Message
        </label>
        <textarea
          id="message"
          className="bg-transparent border-white/20 text-white/90 placeholder:text-white/50 h-32 mt-2"
          placeholder="type your message here !"
        />
      </div>
      <Button variant="outline" className="w-[100px]">
        Submit
      </Button>
    </form>
  );
};

export default Form;
