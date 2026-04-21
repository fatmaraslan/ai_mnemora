import { DashboardLayout } from "@/components/DashboardLayout";

export default function FocusMode() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Focus Mode</h1>
        <p className="text-gray-600 mb-8">
          Eliminate distractions and focus on your studies
        </p>

        <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
          <p className="text-gray-500 mb-4">
            Focus Mode feature coming soon...
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Feature Page
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
