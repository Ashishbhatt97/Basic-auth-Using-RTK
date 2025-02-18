const LazyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h2 className="text-2xl w-5xl font-bold text-center">
        This is a Lazy Loaded Component
      </h2>
      <p className="text-base w-xl text-center">It loads only when required!</p>
    </div>
  );
};

export default LazyComponent;
