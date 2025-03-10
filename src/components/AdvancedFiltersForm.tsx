
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

interface AdvancedFiltersFormProps {
    onFilterChange: (filters: { date?: string }) => void;
}

export default function AdvancedFiltersForm({ onFilterChange }: AdvancedFiltersFormProps) {
    const handleDateChange = (date: Date | null) => {
        onFilterChange({ date: date ? date.toISOString().split("T")[0] : "" });
    };

    return (
        <div>
            <DatePicker onChange={handleDateChange} placeholderText="Buscar por fecha" className="btn btn-primary mt-3"/>
        </div>
    );
}