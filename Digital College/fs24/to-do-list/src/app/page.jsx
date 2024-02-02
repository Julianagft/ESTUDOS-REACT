
export default function Home() {
  return (
    <div className="app w-screen h-screen bg-white flex justify-center items-center">

      <div className="h-4/5	w-3/5">
        <h1 className="font-bold text-center mb-1.5 ">Lista de Afazeres </h1>
        <div className="mt-14 gap-4 flex">
          <label className="font-bold">Atividade:</label>
          <input type="text" className="border-solid border-slate-800 border-2" />
        </div>
      </div>


    </div>
  );
}
