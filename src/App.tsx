import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { UnauthLayout } from "./layouts/UnauthLayout";
import { Login } from "./pages/Auth/pages/Login";
import { Main } from "./pages/Main";
import { Overview } from "./pages/Overview";
import "./variables.css";
import { Registration } from "./pages/Auth/pages/Registration";
import { ToastContainer } from "react-toastify";
import Auth from "@core/store/Auth/Auth";
import { ProtectedRoute } from "@core/router/utils/ProtectedRoute";
import { AuthLayout } from "layouts/AuthLayout";

export const App = observer(() => {
  const user = Auth.ActiveUser;

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Main />}>
              <Route path="overview" element={<Overview />} />
            </Route>
          </Route>
        </Route>
        <Route path="/auth" element={<UnauthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="*" element={<p>Такой старницы не существует - 404</p>} />
      </Routes>
      <ToastContainer />
    </>
  );
});
