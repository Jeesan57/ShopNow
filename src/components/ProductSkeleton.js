export default function ProductSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700 animate-fade-in-up">
      <div className="relative overflow-hidden">
        <div className="w-full h-64 skeleton"></div>
      </div>
      <div className="p-6">
        <div className="h-6 skeleton rounded w-3/4 mb-2"></div>
        <div className="h-4 skeleton rounded w-1/2 mb-4"></div>
        <div className="h-12 skeleton rounded w-full"></div>
      </div>
    </div>
  );
}
