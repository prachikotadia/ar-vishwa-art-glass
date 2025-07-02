
import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { searchItems, getTypeIcon, type SearchableItem } from '@/utils/searchUtils';

interface SearchAutocompleteProps {
  onSearch: (query: string) => void;
  onSelectItem?: (item: SearchableItem) => void;
  placeholder?: string;
  className?: string;
}

const SearchAutocomplete = ({ 
  onSearch, 
  onSelectItem,
  placeholder = "search artwork...",
  className = ""
}: SearchAutocompleteProps) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchableItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 2) {
        const results = searchItems(query);
        setSuggestions(results);
        setIsOpen(results.length > 0);
        setSelectedIndex(-1);
      } else {
        setSuggestions([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % suggestions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev <= 0 ? suggestions.length - 1 : prev - 1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelectItem(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSelectItem = (item: SearchableItem) => {
    setQuery(item.title);
    setIsOpen(false);
    setSelectedIndex(-1);
    onSearch(item.title);
    onSelectItem?.(item);
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setIsOpen(false);
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && suggestions.length > 0 && setIsOpen(true)}
          className="glass w-full pl-10 pr-10 py-2 rounded-full border-0 focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/70"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
          🔍
        </div>
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <Command className="glass backdrop-blur-lg border border-border/50 rounded-lg shadow-xl">
            <CommandList className="max-h-[300px]">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {suggestions.map((item, index) => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => handleSelectItem(item)}
                    className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                      selectedIndex === index ? 'bg-accent' : ''
                    }`}
                  >
                    <span className="text-lg">{getTypeIcon(item.type)}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate">
                        {item.title}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {item.category} • {item.description}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground/60 capitalize">
                      {item.type}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default SearchAutocomplete;
