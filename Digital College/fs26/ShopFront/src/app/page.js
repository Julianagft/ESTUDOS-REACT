import MiddleContent from "@/components/MiddleContent";

export default async function Home() {

   async function fetchData() {

    const response = await fetch("https://fakestoreapi.com/products");

    const dataResult = await response.json();

    return dataResult;
  }

  let data = await fetchData()

  return (
    <div className="flex flex-col min-h-screen min-w-screen max-w-screen">
      <MiddleContent data={data} />
    </div>
  );
  
}
