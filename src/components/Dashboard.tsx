import { useState } from "react";
import OverviewTable from "./OverviewTable";
import QuickFilters from "./QuickFilters";
import AdvancedFiltersForm from "./AdvancedFiltersForm";

export default function Dashboard() {
    const [filters, setFilters] = useState({ status: "", date: "" });

    const handleFilterChange = (newFilters: { status?: string; date?: string }) => {
        setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    };

    return (
        <div>
            <h1>Panel de Proyectos</h1>
            <QuickFilters onFilterChange={handleFilterChange} />
            <AdvancedFiltersForm onFilterChange={handleFilterChange} />
            <OverviewTable filters={filters} />
        </div>
    );
}