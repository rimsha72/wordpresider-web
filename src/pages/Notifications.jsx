import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
import transaction from "../assets/transaction.png";
import check from "../assets/check.png";
export default function Notifications() {
  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <h1 className="font-semibold text-2xl mb-4 gap-4">Notifications</h1>
          <h1 className="font-medium text-lg my-6">Today</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={check} alt="" className="h-10 w-10" />
                <p>Your task has been submitted</p>
              </div>
              <p className="text-red-150">3 hr ago</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={transaction} alt="" className="h-10 w-10" />
                <p>You have received 50 USTD</p>
              </div>
              <p className="text-red-150">3 hr ago</p>
            </div>
          </div>
          <h1 className="font-medium text-lg my-6">Yesterday</h1>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={check} alt="" className="h-10 w-10" />
                <p>Your design has been approved</p>
              </div>
              <p className="text-red-150">3 hr ago</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={transaction} alt="" className="h-10 w-10" />
                <p>Transaction was made into your account</p>
              </div>
              <p className="text-red-150">3 hr ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
