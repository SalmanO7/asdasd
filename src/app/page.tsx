const page = () => {
  return (
    <div className="m-auto h-screen">
      <div className="flex justify-around items-center">
        <div className="w-[200px] h-[200px] bg-green-500">Box 1</div>
        <div className="w-[200px] h-[200px] bg-blue-500">Box 2</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[200px] h-[200px] bg-red-500">Box 3</div>
      </div>
    </div>
  );
};

export default page;
