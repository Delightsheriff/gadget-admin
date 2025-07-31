import { getCategoriesWithProducts } from "@/actions/categories";
import CategoriesPageComponent from "./page-component";

export default async function Categories() {
  const categories = await getCategoriesWithProducts();
  console.log("Fetched categories:", categories);
  return <CategoriesPageComponent categories={categories} />;
}
