import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardHome from "../components/DashboardHome";

export default function Dashboard() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="flex-grow-1">

        <Topbar />

        <DashboardHome />

      </div>

    </div>
  );
}