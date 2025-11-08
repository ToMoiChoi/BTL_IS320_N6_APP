import React from 'react';
import Header from './header';
const Home = ({
    selectedSort,
    setSelectedSort,
    products,
    seriesCategories,
    filterOptions,
    filterOptions2,
    sortOptions,
    isLoggedIn,
    userInfo,
    onLogout
}) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                isLoggedIn={isLoggedIn}
                userInfo={userInfo}
                onLogout={onLogout}
            />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold mb-6">iPhone</h1>
                <div className="flex flex-wrap gap-3 mb-6">
                    {seriesCategories.map((category, index) => (
                        <button
                            key={index}
                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-red-500 hover:text-red-500 transition text-sm font-medium"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <h2 className="text-xl font-bold mb-4">Chọn theo tiêu chí</h2>
                <div className="flex flex-wrap gap-3 mb-3">
                    {filterOptions.map((filter, index) => (
                        <button
                            key={index}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition text-sm font-medium ${filter.active
                                ? 'bg-red-50 border-2 border-red-500 text-red-500'
                                : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                        >
                            {filter.icon && <span>{filter.icon}</span>}
                            <span>{filter.label}</span>
                            {filter.hasDropdown && <span className="text-xs">▼</span>}
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                    {filterOptions2.map((filter, index) => (
                        <button
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
                        >
                            <span>{filter.label}</span>
                            {filter.hasDropdown && <span className="text-xs">▼</span>}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <h2 className="text-xl font-bold">Sắp xếp theo</h2>
                    <div className="flex gap-3 flex-wrap">
                        {sortOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSort(option.value)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition text-sm font-medium ${selectedSort === option.value
                                    ? 'bg-blue-50 border-2 border-blue-500 text-blue-600'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                            >
                                {option.icon && <span>{option.icon}</span>}
                                <span>{option.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group"
                        >
                            <div className="relative p-4">
                                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                        Giảm {product.discount}%
                                    </span>
                                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                                        Trả góp {product.installmentRate}
                                    </span>
                                </div>

                                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[40px]">
                                    {product.name}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {product.specs.map((spec, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-red-600 font-bold text-lg">
                                            {product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-gray-400 text-sm line-through">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded mb-2">
                                    {product.installment}
                                </div>

                                {product.status ? (
                                    <div className="text-orange-600 text-xs font-medium">
                                        {product.status}
                                    </div>
                                ) : (
                                    <div className="text-gray-600 text-xs">
                                        Trả góp 0% - 0đ phụ thu - 0đ trả trước
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-red-700 transition z-50 flex items-center gap-2">
                <span className="text-2xl">🎧</span>
                <span className="font-medium">Liên hệ</span>
            </button>
        </div>
    );
};
export default Home;