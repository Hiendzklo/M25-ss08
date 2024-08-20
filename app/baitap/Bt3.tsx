"use client";  // Đánh dấu component này là Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Products: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();

        if (name.trim()) {
            params.append('name', name);
        }

        if (category.trim()) {
            params.append('category', category);
        }

        // Điều hướng tới URL với các tham số đã tạo
        router.push(`/products?${params.toString()}`);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <div>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Tìm kiếm theo tên"
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        placeholder="Tìm kiếm theo danh mục"
                    />
                </div>
                <button type="submit">Tìm kiếm</button>
            </form>
        </div>
    );
};

export default Products;
