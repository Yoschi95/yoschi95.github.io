import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./components/context/ThemeContext";
import { SidebarProvider } from "./components/context/SidebarContext";

const App = () => {
  return (
    <div className="app">
      <ThemeProvider>
        <SidebarProvider>
          <Header />
          <Main />
          <Footer />
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
