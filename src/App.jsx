import { useRoutes } from "react-router-dom";
import routes from "./routes";
import BasketProvider from "./Contexts/BasketContext";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <BasketProvider>
        {router}
      </BasketProvider>
    </>
  );
}

export default App;
