import React, { useState, Suspense } from "react";
import OverviewTable from "./OverviewTable";
import QuickFilters from "./QuickFilters";

const LazyAdvancedFiltersForm = React.lazy(() => import("./AdvancedFiltersForm"));

export default function DashboardFIX() {
    const [filters, setFilters] = useState({ status: "", date: "" });
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

    const handleFilterChange = (newFilters: { status?: string; date?: string }) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };

    return (
        <div>
            <h1>Panel de Proyectos</h1>
            
            <QuickFilters onFilterChange={handleFilterChange} />

            {!showAdvancedFilters && (
                <button onClick={() => setShowAdvancedFilters(true)} className="btn btn-primary mt-3">Más filtros</button>
            )}
            

            {showAdvancedFilters && (
                <Suspense fallback={<p>Cargando filtros avanzados...</p>}>
                    <LazyAdvancedFiltersForm onFilterChange={handleFilterChange} />
                </Suspense>
            )}

            <OverviewTable filters={filters} />
        </div>
    );
}