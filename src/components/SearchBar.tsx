import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <div className="relative w-full max-w-[9rem] sm:max-w-xs">
    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none">
      <Search className="w-4 h-4" />
    </span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      aria-label="Search artworks"
      placeholder="Search artwork…"
      className="w-full pl-7 pr-2 py-1 text-xs sm:pl-8 sm:pr-3 sm:py-1.5 sm:text-sm rounded-full glass bg-white/40 dark:bg-black/40 backdrop-blur-md text-foreground placeholder:text-muted-foreground focus:bg-white/60 dark:focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 shadow border border-transparent focus:border-primary/60"
    />
  </div>
);

export default SearchBar; 