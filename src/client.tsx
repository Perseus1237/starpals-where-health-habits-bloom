import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Missing root element for hydration");
}

startTransition(() => {
  hydrateRoot(
    root,
    <StrictMode>
      <StartClient />
    </StrictMode>,
  );
});
