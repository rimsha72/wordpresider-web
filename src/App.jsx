import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Invite from "./pages/Invite";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";
import Plans from "./pages/Plans";
import Payment from "./pages/Payment";
import AccountDetails from "./pages/AccountDetails";
import Tasks from "./pages/Tasks";
import TaskPayment from "./pages/TaskPayment";
import Wallet from "./pages/Wallet";
import TaskHistory from "./pages/TaskHistory";
import InviteFriends from "./pages/InviteFriends";
import Terms from "./pages/Terms";
import Notifications from "./pages/Notifications";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="font-poppins">
      <Routes>
        {/* Protected Routes */}
        {authenticated ? (
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="vips" element={<Plans />} />
            <Route path="vips/payment" element={<Payment />} />
            <Route path="vips/tasks" element={<Tasks />} />
            <Route path="vips/tasks/payment" element={<TaskPayment />} />
            <Route path="account" element={<AccountDetails />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="history" element={<TaskHistory />} />
            <Route path="invite-friends" element={<InviteFriends />} />
            <Route path="terms-conditions" element={<Terms />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        ) : (
          // Redirect to invite page if not authenticated
          <Route path="*" element={<Navigate to="/invite" replace />} />
        )}

        {/* Invite Routes */}
        <Route path="/invite" element={<Layout />}>
          <Route
            index
            element={<Invite setAuthenticated={setAuthenticated} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
