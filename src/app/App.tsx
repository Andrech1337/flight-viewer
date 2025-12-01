import type { FC } from "react";
import Router from "./Router.tsx";
import Providers from "./Providers.tsx";

const App: FC = () => {
  return (
    <Providers>
      <Router />
    </Providers>
  );
};

export default App;
