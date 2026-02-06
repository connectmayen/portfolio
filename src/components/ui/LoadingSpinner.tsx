const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-zinc-400">Loading portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
