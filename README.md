# mmallinteractiva-kine-uss
import React from "react";
import { Card } from "@/components/ui/card";

const semestres = [
  {
    nombre: "1° Semestre",
    color: "bg-pink-200",
    ramos: [
      "Biología Celular",
      "Matemática Básica",
      "Fundamentos del Movimiento Humano",
      "Introducción a la Kinesiología",
      "Morfología Básica"
    ]
  },
  {
    nombre: "2° Semestre",
    color: "bg-pink-300",
    ramos: [
      "Física Kinesiológica",
      "Psicología Aplicada a la Salud",
      "Bioenergética y Metabolismo",
      "Morfología del Movimiento Humano",
      "Fisiología General"
    ]
  },
  {
    nombre: "3° Semestre",
    color: "bg-pink-400",
    ramos: [
      "Análisis del Movimiento Humano I",
      "Motricidad Humana",
      "Primeros Auxilios",
      "Fisiología del Ejercicio",
      "Innovación y Tecnología en Salud"
    ]
  },
  {
    nombre: "4° Semestre",
    color: "bg-pink-500",
    ramos: [
      "Análisis del Movimiento Humano II",
      "Ética Profesional",
      "Persona y Sociedad",
      "Salud Digital",
      "Salud Poblacional"
    ]
  },
  {
    nombre: "5° Semestre",
    color: "bg-pink-600",
    ramos: [
      "Evaluación Funcional",
      "Neurociencia",
      "Geriatría y Gerontología",
      "Gestión en Salud",
      "Intervención Kinesiológica Respiratoria"
    ]
  },
  {
    nombre: "6° Semestre",
    color: "bg-rose-300",
    ramos: [
      "Intervención Kinesiológica Neurológica",
      "Evaluación Clínica",
      "Kinesiología Cardiovascular",
      "Electroterapia",
      "Rehabilitación Comunitaria"
    ]
  },
  {
    nombre: "7° Semestre",
    color: "bg-rose-400",
    ramos: [
      "Intervención Musculoesquelética",
      "Clínica I",
      "Investigación en Salud",
      "Taller de Integración I",
      "Terapia Manual"
    ]
  },
  {
    nombre: "8° Semestre",
    color: "bg-rose-500",
    ramos: [
      "Clínica II",
      "Clínica III",
      "Seminario de Título",
      "Taller de Integración II",
      "Ética Clínica"
    ]
  },
  {
    nombre: "9° Semestre",
    color: "bg-rose-600",
    ramos: [
      "Internado Profesional I",
      "Internado Profesional II"
    ]
  },
  {
    nombre: "10° Semestre",
    color: "bg-rose-700",
    ramos: [
      "Internado Profesional III",
      "Internado Profesional IV"
    ]
  }
];

export default function MiMallaDeKine() {
  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Mi Malla de Kine 🎀🫀🦴
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {semestres.map((sem, index) => (
          <div
            key={index}
            className={`rounded-3xl p-4 shadow-xl ${sem.color} text-pink-900`}
          >
            <h2 className="text-lg font-semibold text-center mb-3">
              {sem.nombre}
            </h2>
            <ul className="space-y-2">
              {sem.ramos.map((ramo, idx) => (
                <Card key={idx} className="bg-white bg-opacity-70 px-3 py-2 rounded-xl shadow text-sm">
                  {ramo}
                </Card>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
