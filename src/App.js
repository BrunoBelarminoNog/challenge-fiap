import Providers from "./context";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global";
function App() {
  return (
    <>
      <Providers>
        <Routes />
        <GlobalStyles />
      </Providers>
    </>
  );
}

export default App;
