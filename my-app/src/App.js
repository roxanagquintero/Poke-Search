
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import {
  Route,
  Link,
  BrowserRouter,Switch
} from "react-router-dom";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Main />
    </>
  );
}
export default App;
// const CardsPage = () => {
//   return (
//     <>
//       <Main />
//     </>
//   );
// };
// const DashboardPage = () => {
//   return (
//     <>
//       <Dashboard />
//     </>
//   );
// };
// const PageNotFound = () => {
//   return (
//     <>
//       <div>404: Page Not Found!</div>
//     </>
//   );
// };
// const routes = (
//   <BrowserRouter>
//     <div>
      
//       <Switch>
//         <Route path="/" component={CardsPage} exact={true} />
//         <Route path="/cards" component={CardsPage} />
//         <Route path="/dashboard" component={DashboardPage} />
//         <Route component={PageNotFound} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

// export default routes;
