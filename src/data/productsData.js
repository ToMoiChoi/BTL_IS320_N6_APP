export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max 256GB | Chính hãng VN/A',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png',
        price: '26.490.000đ',
        originalPrice: '34.990.000đ',
        discount: 24,
        installment: 'Smember giảm đến 265.000đ',
        specs: ['6.7 inches', '8 GB', '256 GB'],
        status: 'Sắp về hàng',
        installmentRate: '0%'
    },
    {
        id: 2,
        name: 'iPhone 16 Pro 128GB | Chính hãng VN/A',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png',
        price: '25.990.000đ',
        originalPrice: '28.990.000đ',
        discount: 10,
        installment: 'Smember giảm đến 260.000đ',
        specs: ['6.3 inches', '128 GB'],
        installmentRate: '0%'
    },
    {
        id: 3,
        name: 'Điện thoại iPhone 17 Pro 256GB',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-256-gb.png',
        price: '34.990.000đ',
        discount: 14,
        installment: 'Smember giảm đến 350.000đ',
        specs: ['6.3 inches', '256 GB'],
        installmentRate: '0%'
    },
    {
        id: 4,
        name: 'iPhone 14 128GB | Chính hãng VN/A',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_2_1.jpg',
        price: '13.690.000đ',
        originalPrice: '14.990.000đ',
        discount: 9,
        installment: 'Smember giảm đến 137.000đ',
        specs: ['6.1 inches', '6 GB', '128 GB'],
        installmentRate: '0%'
    },
    {
        id: 5,
        name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png',
        price: '25.590.000đ',
        originalPrice: '29.990.000đ',
        discount: 15,
        installment: 'Smember giảm đến 256.000đ',
        specs: ['6.7 inches', '6 GB', '128 GB'],
        installmentRate: '0%'
    },
    {
        id: 6,
        name: 'iPhone 15 128GB | Chính hãng VN/A',
        image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png',
        price: '19.490.000đ',
        originalPrice: '22.990.000đ',
        discount: 13,
        installment: 'Smember giảm đến 195.000đ',
        specs: ['6.1 inches', '6 GB', '128 GB'],
        installmentRate: '0%'
    }
];

export const seriesCategories = [
    'IPHONE 17 SERIES',
    'IPHONE AIR',
    'IPHONE 16 SERIES',
    'IPHONE 15 SERIES',
    'IPHONE 14 SERIES',
    'IPHONE 13 SERIES',
    'IPHONE 12 SERIES',
    'IPHONE 11 SERIES'
];

export const filterOptions = [
    { icon: '🎛️', label: 'Bộ lọc', active: true },
    { icon: '🚚', label: 'Sẵn hàng' },
    { icon: '📦', label: 'Hàng mới về' },
    { icon: '⏰', label: 'Xem theo giá' },
    { label: 'Bộ nhớ trong', hasDropdown: true },
    { label: 'Dung lượng RAM', hasDropdown: true },
    { label: 'Kích thước màn hình', hasDropdown: true }
];

export const filterOptions2 = [
    { label: 'Nhu cầu sử dụng', hasDropdown: true },
    { label: 'Kiểu màn hình', hasDropdown: true },
    { label: 'Tính năng camera', hasDropdown: true },
    { label: 'Tần số quét', hasDropdown: true },
    { label: 'Tính năng đặc biệt', hasDropdown: true }
];

export const sortOptions = [
    { icon: '⭐', label: 'Phổ biến', value: 'popular' },
    { icon: '🔥', label: 'Khuyến mãi HOT', value: 'hot' },
    { icon: '↑', label: 'Giá Thấp - Cao', value: 'price-asc' },
    { icon: '↓', label: 'Giá Cao - Thấp', value: 'price-desc' }
];