import { Link, useNavigate } from "react-router-dom";
import Header from "../layouts/partials/header";
export default function Terms() {
  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="mx-4 sm:mx-9 my-8 rounded">
          <h1 className="font-semibold text-2xl mb-4 gap-4">
            Terms and Conditions
          </h1>
          <p className="my-8 text-justify">
            Users must provide accurate registration information, comply with
            laws, avoid fraud, and use the app only for authorized purposes.
            Earnings can be made by completing tasks accurately, with
            withdrawals available after unlocking levels by paying fees. The
            affiliate program allows earnings through referrals, but unethical
            recruitment is prohibited, and cryptocurrency transactions must
            adhere to app policies. Users must avoid disruptive activities,
            unauthorized access, and distributing harmful software. Violations
            may result in account suspension or termination, while users may
            also terminate their accounts. App content is protected by
            intellectual property laws, granting users a limited license for
            personal use. The app is provided "as is," without warranties, and
            is not liable for indirect damages. Terms are governed by the laws
            of [Your Jurisdiction], with disputes resolved in local courts.
            Continued use of the app implies acceptance of any modifications to
            these terms.
          </p>
          <p className="my-8 text-justify">
            Users must provide accurate registration information, comply with
            laws, avoid fraud, and use the app only for authorized purposes.
            Earnings can be made by completing tasks accurately, with
            withdrawals available after unlocking levels by paying fees. The
            affiliate program allows earnings through referrals, but unethical
            recruitment is prohibited, and cryptocurrency transactions must
            adhere to app policies. Users must avoid disruptive activities,
            unauthorized access, and distributing harmful software. Violations
            may result in account suspension or termination, while users may
            also terminate their accounts. App content is protected by
            intellectual property laws, granting users a limited license for
            personal use. The app is provided "as is," without warranties, and
            is not liable for indirect damages. Terms are governed by the laws
            of [Your Jurisdiction], with disputes resolved in local courts.
            Continued use of the app implies acceptance of any modifications to
            these terms.
          </p>
          <div className="flex justify-end">
            <button className="px-4 text-red-110 py-2 border border-red-110 rounded-md">Cancel</button>
            <button className="px-6 ml-4 text-white py-2 bg-red-110 rounded-md">Agree</button>
          </div>
        </div>
      </div>
    </div>
  );
}
