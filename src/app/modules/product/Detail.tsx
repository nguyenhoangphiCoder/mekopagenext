import { ProductOneDetail } from "../../../components/ProductOneDetail";

export default async function Detail({ type, post }: any) {
  return <ProductOneDetail type={type} post={post} />;
}
