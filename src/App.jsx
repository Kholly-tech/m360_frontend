import AppRoutes from "./routes/routes";
import Clarity from "@microsoft/clarity";

const App = () => {
  const projectId = "tn02kkuk31";

  Clarity.init(projectId);
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
