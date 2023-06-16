import AdminAuthContextProvider from "./contexts/AdminAuthContext";
import Routes from "./Routes";
import { LanguageProvider } from './contexts/LanguageContext';


function App() {



  return (
    <div className="App">
       <LanguageProvider>
          <AdminAuthContextProvider>
            <Routes />
          </AdminAuthContextProvider>
       </LanguageProvider>
    </div>
  );
}

export default App;
