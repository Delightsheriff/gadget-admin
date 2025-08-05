import { getMonthlyOrders } from "@/actions/orders";
import { getCategoryData } from "@/actions/categories";
import { getLatestUsers } from "@/actions/auth";
import PageComponent from "./page-component";

const Dashboard = async () => {
  const monthlyOrders = await getMonthlyOrders();
  const categoryData = await getCategoryData();
  const latestUsers = await getLatestUsers();

  return (
    <PageComponent
      latestUsers={latestUsers}
      monthlyOrders={monthlyOrders}
      categoryData={categoryData}
    />
  );
};

export default Dashboard;
