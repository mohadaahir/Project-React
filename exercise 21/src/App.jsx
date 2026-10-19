
import './App.css'



const stats = [
  { title: "Average Grade", value: "88%", icon: "📊" },
  { title: "Courses", value: "3", icon: "📚" },
  { title: "Study Hours", value: "45h", icon: "⏰" },
  { title: "Assignments", value: "12", icon: "✍️" },
];

const courses = [
  {
    name: "React Fundamentals",
    progress: 75,
    next: "Components & Props",
    instructor: "Sarah Wilson",
    color: "bg-blue-500",
  },
  {
    name: "JavaScript Advanced",
    progress: 45,
    next: "Async/Await",
    instructor: "Mike Johnson",
    color: "bg-yellow-500",
  },
  {
    name: "UI/UX Design",
    progress: 90,
    next: "Color Theory",
    instructor: "Emily Chen",
    color: "bg-purple-500",
  },
];

const assignments = [
  {
    title: "Build a Todo App",
    course: "React Fundamentals",
    status: "Pending",
    color: "bg-red-100 text-red-600",
    due: "2026-10-20",
  },
  {
    title: "API Integration",
    course: "JavaScript Advanced",
    status: "Completed",
    color: "bg-green-100 text-green-600",
    due: "2026-10-18",
  },
  {
    title: "Design System",
    course: "UI/UX Design",
    status: "In Progress",
    color: "bg-yellow-100 text-yellow-700",
    due: "2026-10-25",
  },
];

const announcements = [
  {
    title: "New Course Available",
    description: "Check out our new TypeScript course!",
    time: "2 hours ago",
  },
  {
    title: "Maintenance Notice",
    description: "Platform updates scheduled for tonight.",
    time: "5 hours ago",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 text-gray-800 sm:p-6 lg:p-10">
      <main className="mx-auto max-w-7xl space-y-6">

        {/* Header */}
        <header className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">
              Welcome back, Student!
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your courses today.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Notifications"
              className="relative rounded-full p-2 hover:bg-gray-100"
            >
              🔔
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
              S
            </div>
          </div>
        </header>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-2xl">{stat.icon}</span>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <h2 className="text-2xl font-bold">{stat.value}</h2>
              </div>
            </div>
          ))}
        </section>

        {/* Main Content */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Course Progress */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
            <h2 className="mb-6 text-lg font-bold">
              Course Progress
            </h2>

            <div className="space-y-8">
              {courses.map((course) => (
                <div key={course.name}>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">
                      {course.name}
                    </h3>
                    <span className="text-sm font-semibold text-gray-600">
                      {course.progress}%
                    </span>
                  </div>

                  <div
                    className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100"
                    role="progressbar"
                    aria-label={`${course.name} progress`}
                    aria-valuenow={course.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className={`h-full rounded-full ${course.color} transition-all duration-500`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap justify-between gap-2 text-sm text-gray-500">
                    <p>
                      Next:{" "}
                      <span className="text-gray-700">
                        {course.next}
                      </span>
                    </p>
                    <span>{course.instructor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">

            {/* Upcoming Assignments */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-lg font-bold">
                Upcoming Assignments
              </h2>

              <div className="space-y-5">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.title}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold">
                          {assignment.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-500">
                          {assignment.course}
                        </p>
                      </div>

                      <span
                        className={`whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium ${assignment.color}`}
                      >
                        {assignment.status}
                      </span>
                    </div>

                    <p className="mt-2 text-right text-xs text-gray-400">
                      Due: {assignment.due}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h2 className="mb-5 text-lg font-bold">
                Announcements
              </h2>

              <div className="space-y-5">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.title}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h3 className="text-sm font-semibold">
                      {announcement.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {announcement.description}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {announcement.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
