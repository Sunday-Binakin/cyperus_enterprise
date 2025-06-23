import { FilterOptions, ProductCategory } from '@/types/product';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

interface FiltersProps {
    filters: FilterOptions;
    onFilterChange: (newFilters: FilterOptions) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
    const categories: (ProductCategory | 'all')[] = [
        'all',
        'tigernut_milk',
        'tigernut_flour',
        'raw_tigernuts',
        'tigernut_oil',
        'tigernut_snacks'
    ];

    const handleCategoryChange = (category: ProductCategory | 'all') => {
        onFilterChange({ ...filters, category });
    };

    const handleSearchChange = (searchQuery: string) => {
        onFilterChange({ ...filters, searchQuery });
    };

    const handleStockChange = (inStock: boolean | 'all') => {
        onFilterChange({ ...filters, inStock });
    };

    return (
        <div className={`space-y-6 p-6 bg-white rounded-2xl shadow-md ${bebasNeue.className}`}>
            <div className='-mt-20'>
                <h3 className="text-2xl mb-3 text-[#475A22]">Search</h3>
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full h-[5000px] px-4 py-2 border rounded-full focus:outline-none focus:border-[#475A22]"
                    value={filters.searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>

            <div>
                <h3 className="text-2xl mb-3 text-[#475A22]">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`block w-full text-left px-4 py-2 rounded-lg transition ${filters.category === category
                                ? 'bg-[#475A22] text-white'
                                : 'hover:bg-gray-100'
                                }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category.split('_').map(word =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(' ')}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl mb-3 text-[#475A22]">Availability</h3>
                <select
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#475A22]"
                    value={filters.inStock.toString()}
                    onChange={(e) => handleStockChange(e.target.value === 'true'
                        ? true
                        : e.target.value === 'false'
                            ? false
                            : 'all')}
                >
                    <option value="all">All</option>
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                </select>
            </div>
        </div>
    );
} 