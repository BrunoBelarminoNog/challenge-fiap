import React from "react";

import { AuthProvider } from "./Auth";

const Providers = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
