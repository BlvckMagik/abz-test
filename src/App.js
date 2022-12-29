import { Provider } from "react-redux";
import ThemeProvider from "./ui-theme";
import Page from "./components/Page";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
