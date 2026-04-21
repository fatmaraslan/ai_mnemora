import { DashboardLayout } from "@/components/DashboardLayout";

export default function StudyMusic() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Study Music</h1>
        <p className="text-gray-600 mb-8">
          Curated playlists to help you focus and study
        </p>

        <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
          <p className="text-gray-500 mb-4">
            Study Music feature coming soon...
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Feature Page
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
