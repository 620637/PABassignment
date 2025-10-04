export default function CourseCard({ title, description }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-lg p-6 w-64 flex flex-col justify-between">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
        Enroll Now
      </button>
    </div>
  );
}
