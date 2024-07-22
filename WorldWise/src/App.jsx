import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "../components/CityList";
import { useState } from "react";

const BASE_URL ="http://localhost:9000";

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] =useState(false);

  useEffect(function () {
    async function fetchCities() {
      const res = await fetch(`BASE_URL/cities`);
      const data
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />  } />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />  }>
        <Route index element={<CityList />} />
          <Route path="cities"element={<CityList />} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
