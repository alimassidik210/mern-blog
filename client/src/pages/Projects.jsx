import React from "react";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex flex-col items-center justify-center gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        kami siap menghadirkan aplikasi-aplikasi keren yang bermanfaat bagi
        umat. Setiap aplikasi yang kami buat dirancang untuk memudahkan hidup
        sehari-hari, sambil tetap berpegang pada nilai-nilai Islam. Pantau
        terus, karena banyak proyek menarik akan segera hadir untuk membantu
        Anda hidup lebih baik!
      </p>
      <CallToAction />
    </div>
  );
}
