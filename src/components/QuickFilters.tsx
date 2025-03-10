
interface QuickFiltersProps {
    onFilterChange: (filters: { status?: string }) => void;
}

export default function QuickFilters({ onFilterChange }: QuickFiltersProps) {
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ status: event.target.value });
    };

    return (
        <div>
            
            <label htmlFor="statusFilter">Filtrar por estado: </label>
            <select id="statusFilter" onChange={handleStatusChange}>
                <option value="">Todos</option>
                <option value="En progreso">En progreso</option>
                <option value="Completado">Completado</option>
                <option value="Pendiente">Pendiente</option>
            </select>
        </div>
    );
}