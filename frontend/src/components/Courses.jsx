import CourseCard from "./CourseCard";

export default function Courses() {
  const courses = [
    {
      title: "React for Beginners",
      description: "Learn React from scratch with hands-on projects.",
    },
    {
      title: "Advanced JavaScript",
      description: "Deep dive into JS concepts and patterns.",
    },
    {
      title: "Fullstack MERN",
      description: "Build complete MERN stack applications.",
    },
    {
      title: "UI/UX Design Basics",
      description: "Learn the fundamentals of designing beautiful interfaces.",
    },
  ];

  return (
    <section className="w-full py-12 flex flex-wrap justify-center gap-6 px-4">
      {courses.map((course, idx) => (
        <CourseCard
          key={idx}
          title={course.title}
          description={course.description}
        />
      ))}
    </section>
  );
}
