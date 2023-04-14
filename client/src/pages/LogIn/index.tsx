import { createRef, FormEvent, useState } from "react";

import Input from "../../components/ui/Input";
import Logo from "../../components/ui/Logo";

interface State {
  stage: "login" | "password";
  prompt: "create account!" | "forgot password?";
  error?: boolean;
}

const LogInPage = () => {
  const loginRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  const [state, setState] = useState<State>({
    stage: "login",
    prompt: "create account!",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (state.stage === "login")
      return setState({ stage: "password", prompt: "forgot password?" });

    console.log("logged in");
  };

  return (
    <div className="grid h-screen w-screen place-items-center bg-bg-primary font-main text-text-primary">
      <main className="flex w-[300px] flex-col gap-8">
        <div className="relative flex h-max w-full items-center justify-between py-2">
          <Logo></Logo>
          <a
            href="#"
            className="underline-offset-1 duration-100 hover:underline"
          >
            {state.prompt}
          </a>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex h-max w-full flex-col items-center justify-between gap-4 rounded-xl border-2 border-text-secondary p-4 pt-2"
        >
          {state.stage === "login" && (
            <Input inputRef={loginRef} name="login"></Input>
          )}
          {state.stage === "password" && (
            <Input inputRef={passwordRef} name="password"></Input>
          )}
          <button
            type="submit"
            className="h-16 w-full rounded-md bg-accent duration-300 hover:bg-primary"
          >
            let's go!
          </button>
        </form>
      </main>
    </div>
  );
};

export default LogInPage;
