import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/home/itemListContainer/ItemListContainer";
import { customTheme } from "./themeConfig";

function App() {
  let nombre = "Pedro";
  let apellido = "Rodriguez";

  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <ItemListContainer nombre={nombre} apellido={apellido} />
    </ThemeProvider>
  );
}

export default App;
