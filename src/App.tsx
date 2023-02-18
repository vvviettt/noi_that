import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainLayout from "./layout/MainLayout";
import ProductDetail from "./pages/product/ProductDetail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
