import Setting from "@/app/components/CoachDashboard/Setting/Setting";
import { Footer } from "@/app/components/Footer/Footer";

import React from "react";

export default function SettingPage() {
  return (
    <div className="w-full overflow-y-scroll">
      <Setting />
      <Footer />
    </div>
  );
}
