import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Materials from "./components/Materials/Materials";
import SignIn from "./components/SignIn/SignIn";
import AuthContextProvider from "./contexts/AuthContext";
import News from "./components/News/News";
import Contacts from "./components/Contacts/Contacts";
import Partners from "./components/Partners/Partners";
import About from "./components/About/About";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AdminAuthContextProvider from "./contexts/AdminAuthContext";
import EditMaterials from "./components/EditMaterials/EditMaterials";
import AddEvent from "./components/AddEvent/AddEvent";
import AdminNewsContextProvider from "./contexts/AdminNewsContext";
import NewsContextProvider from "./contexts/NewsContext";
import NewsDetails from "./components/NewsDetails/NewsDetails";
import AdminPanelNews from "./components/AdminPanelNews/AdminPanelNews";
import EditNews from "./components/EditNews/EditNews";
import FavouriteNews from "./components/FavouriteNews/FavouriteNews";
import AdminMaterialsContextProvider from "./contexts/AdminMaterialsContext";
import MaterialsContextProvider from "./contexts/MateriasContext";
import MHealth from "./components/MHealth/MHealth";
import ELearning from "./components/ELearning/ELearning";
import SmartDevices from "./components/SmartDevices/SmartDevices";
import DigitalResources from "./components/DigitalResources/DigitalResources";
import MediaPrimer from "./components/MediaPrimer/MediaPrimer";
import EditUsers from "./components/EditUsers/EditUsers";
import AdminUsersContextProvider from "./contexts/AdminUsersContext";
import PrivateRoute from "./helpers/PrivateRoute";
import Miha from "./components/Miha/Miha";
import Miha2 from "./components/Miha2/Miha2";
import RegisterUser from "./components/RegisterUser/RegisterUser";

const Routes = () => {
  return (
    <AuthContextProvider>
      <AdminAuthContextProvider>
        <AdminNewsContextProvider>
          <NewsContextProvider>
            <MaterialsContextProvider>
              <AdminMaterialsContextProvider>
                <AdminUsersContextProvider>
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/mhealth" component={MHealth} />
                      <Route exact path="/e-learning" component={ELearning} />
                      <Route
                        exact
                        path="/smart-devices"
                        component={SmartDevices}
                      />
                      <Route
                        exact
                        path="/digital-resources"
                        component={DigitalResources}
                      />
                      <Route
                        exact
                        path="/media-primer"
                        component={MediaPrimer}
                      />
                      <Route exact path="/login" component={SignIn} />
                      <Route exact path="/materials" component={Materials} />
                      <Route exact path="/news" component={News} />
                      <Route
                        exact
                        path="/news-details/:id"
                        component={NewsDetails}
                      />
                      <Route exact path="/contacts" component={Contacts} />
                      <Route exact path="/partners" component={Partners} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/admin_panel" component={AdminPanel} />
                      <Route
                        exact
                        path="/register_user"
                        component={RegisterUser}
                      />
                      {/* Код Михаила */}
                      <Route exact path="/miha" component={Miha} />
                      <Route exact path="/miha2" component={Miha2} />
                      {/* Конец кода Михаила */}
                      <PrivateRoute
                        exact
                        path="/admin-panel-news"
                        component={AdminPanelNews}
                      />
                      <PrivateRoute
                        exact
                        path="/edit-materials"
                        component={EditMaterials}
                      />
                      <PrivateRoute
                        exact
                        path="/add-event"
                        component={AddEvent}
                      />
                      <PrivateRoute
                        exact
                        path="/edit-news/:id"
                        component={EditNews}
                      />
                      <Route
                        exact
                        path="/favourite-news"
                        component={FavouriteNews}
                      />
                      <PrivateRoute
                        exact
                        path="/edit-users"
                        component={EditUsers}
                      />
                      <Redirect to="/" />
                    </Switch>
                    <Footer />
                  </BrowserRouter>
                </AdminUsersContextProvider>
              </AdminMaterialsContextProvider>
            </MaterialsContextProvider>
          </NewsContextProvider>
        </AdminNewsContextProvider>
      </AdminAuthContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;
