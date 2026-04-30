import { Search, X } from "lucide-react";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
        <div className="relative mb-4">
            <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
            />
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Search todo..."
                className="w-full text-sm pl-9 pr-9 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-800 
                placeholder:text-stone-400 outline-none focus:border-stone-400 transition-colors"
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors"
                >
                    <X size={15}/>
                </button>
            )}
        </div>
    );
};

export default SearchInput;