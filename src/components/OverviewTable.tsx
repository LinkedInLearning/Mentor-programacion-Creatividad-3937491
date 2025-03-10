import React from "react";

interface OverviewTableProps {
    filters: { status?: string; date?: string };
}

export default function OverviewTable({ filters }: OverviewTableProps) {
    const projects = [
        { id: 1, name: "Proyecto Alpha", status: "En progreso", date: "2025-03-01" },
        { id: 2, name: "Proyecto Beta", status: "Completado", date: "2026-02-15" },
        { id: 3, name: "Proyecto Gamma", status: "Pendiente", date: "2027-01-20" },
    ];

    const filteredProjects = projects.filter(project =>
        (!filters.status || project.status === filters.status) &&
        (!filters.date || project.date === filters.date)
    );

    return (
        <div className="border-top mt-3 pt-3">
            <h2>Proyectos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProjects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.status}</td>
                            <td>{project.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}