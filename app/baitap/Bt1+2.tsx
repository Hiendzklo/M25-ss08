"use client";  // Đánh dấu component này là Client Component

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Posts: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const router = useRouter();
    const searchParams = useSearchParams();
    
    useEffect(() => {
        const query = searchParams.get('search');
        if (query) {
            setSearchTerm(query);  // Cập nhật searchTerm từ URL
        }
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            // Cập nhật URL với tham số tìm kiếm
            router.push(`/posts?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div>
            <h1>Search Value: {searchTerm}</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Nhập từ khóa"
                />
                <button type="submit">Tìm kiếm</button>
            </form>
        </div>
    );
};

export default Posts;
