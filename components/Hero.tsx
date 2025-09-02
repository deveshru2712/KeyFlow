import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-40">
      <h1 className="font-display mx-auto max-w-xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-6xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive{" "}
        <span className="text-primary">finance</span>.
      </h1>
      <p className="mx-auto max-w-4xl text-center text-lg text-neutral-500">
        Say goodbye to the outdated{" "}
        <span className="text-primary">financial tools</span> . Every small
        business owner, regardless of the background, can now manage their
        business like a pro. Simple.{" "}
        <span className="text-primary">Intuitive</span> And never boring.
      </p>
      <div className="mx-auto flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="mr-5 flex-1 rounded-xl border border-neutral-600 px-4 text-slate-100 transition-all duration-300 placeholder:text-neutral-500 focus:ring-1 focus:ring-sky-500 focus:outline-none"
          placeholder="enter your email"
        />
        <button className="relative cursor-pointer overflow-hidden rounded-xl border border-neutral-700 px-4 py-2 text-white">
          <div className="via-primary absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent" />
          Join Waitlist
        </button>
      </div>
    </div>
  );
};
