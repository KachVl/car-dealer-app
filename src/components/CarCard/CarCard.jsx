export const CarCard = ({ car }) => {
  const { Make_Name: brandName, Model_Name: model } = car;

  return (
    <article
      className="min-w-fit w-full rounded border-2 border-foreground
        flex flex-col gap-[10px] bg-slate-900 items-center text-center 
        hover:border-decorationColor1 duration-300 cursor-pointer hover:scale-[1.1]"
    >
      <h3 className="w-full border-b-2 border-inherit px-[15px] py-[5px] font-bold">
        {brandName}
      </h3>
      <div className="w-full flex justify-between gap-[10px] px-[15px] py-[5px]">
        <span>Model:</span>
        <span className="text-decorationColor1 whitespace-nowrap">{model}</span>
      </div>
    </article>
  );
};
