import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

const routerBase = (import.meta.env.VITE_BASE_PATH ?? '/Altinoz/').replace(/\/$/, '');

function Router() {
  return (
    <WouterRouter base={routerBase}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
