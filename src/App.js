import { AuthProvider } from "./context/Authcontext";
import Home from "./views/Home";
import LoginForm from "./views/Login";
import { Provider } from "react-redux"; 
import store from "./redux/store";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./views/Cart";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/home" element={<Home> </Home>}></Route>
              <Route path="/" element={<LoginForm></LoginForm>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
