import { useMeQuery } from "@/services/api";
import Hero from "../Hero";

const Home: React.FC = () => {
  const { isSuccess, isError, data } = useMeQuery();
  return (
    <>
      <Hero />
      <div className="flex justify-center items-center mt-10">
        <div className="w-96 h-96 bg-neutral-800 rounded-md">
          {isSuccess && (
            <div className="flex flex-col items-center justify-center gap-2 h-96">
              <h1 className="text-2xl font-bold text-center">
                {data?.data.name}
              </h1>
              <p className="text-base w-xl text-center">{data?.data.email}</p>
            </div>
          )}

          {!isSuccess && !isError && (
            <div className="flex flex-col items-center justify-center gap-2 h-96">
              <h1 className="text-2xl font-bold text-center">Loading...</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
