import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// dist/assets/index-41170e4e.css   29.87 kB │ gzip:   5.06 kB
// dist/assets/index-b1173f0f.js   535.61 kB │ gzip: 150.52 kB

const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
