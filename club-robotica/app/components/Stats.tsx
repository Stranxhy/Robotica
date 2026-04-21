const stats = [
  { value: "50+", label: "Miembros activos" },
  { value: "20+", label: "Proyectos completados" },
  { value: "10+", label: "Competencias ganadas" },
  { value: "5", label: "Años de innovación" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#cc0000" }} className="py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="text-4xl font-extrabold leading-none">{s.value}</span>
            <span className="text-red-200 text-sm mt-1 font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
