import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/FakeAuthContext";
import ProtectedRoutes from "./pages/ProtectedRoutes";

import CityList from "../components/CityList";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";
import SpinnerFullPage from "../components/SpinnerFullPage";


// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/index.html                   0.48 kB │ gzip:   0.31 kB
// dist/assets/index-55e8034a.css   29.96 kB │ gzip:   5.07 kB
// dist/assets/index-75485e73.js   509.76 kB │ gzip: 148.86 kB





function App() {
  return (
    <AuthProvider>
    <CitiesProvider>
      <Suspense fallback={<SpinnerFullPage />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />  } />
            <Route path="/login" element={<Login />} />
            <Route path="app" element={ <ProtectedRoutes>
              <AppLayout />
            </ProtectedRoutes> }>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities"element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </CitiesProvider>
    </AuthProvider>
  )
}

export default App
