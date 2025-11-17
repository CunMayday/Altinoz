import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <WouterRouter base="/Altinoz">
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
