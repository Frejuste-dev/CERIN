import React from "react";
import { TrustStatsSection as GlobalTrustStats } from "../../../components";

export const StatsSection: React.FC = () => {
  return (
    <div className="bg-white">
      <GlobalTrustStats variant="default" />
    </div>
  );
};
