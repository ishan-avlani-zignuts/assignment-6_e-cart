import {  useAuth } from "./context/Authcontext";
import Home from "./views/Home";
import LoginForm from "./views/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./views/Cart";
import PageNotFound from "./components/PageNotFound";
function App() {
  const { currentUser} = useAuth();
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/home" element={currentUser ? <Home/> : <LoginForm />}></Route>
              <Route path="/" element={<LoginForm />}></Route>
              <Route path="/cart" element={currentUser ? <Cart/> : <LoginForm />}></Route>
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
