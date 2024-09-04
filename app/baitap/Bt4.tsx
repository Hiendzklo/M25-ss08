"use client";  // Đánh dấu component này là Client Component

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchPage: React.FC = () => {
    // Khai báo state để lưu trữ giá trị của từ khóa tìm kiếm, vị trí và trạng thái loading
    const [keyword, setKeyword] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Sử dụng useEffect để lấy giá trị từ URL khi component được tải
    useEffect(() => {
        const queryKeyword = searchParams.get('keyword');
        const queryLocation = searchParams.get('location');
        
        if (queryKeyword) {
            setKeyword(queryKeyword);
        }
        
        if (queryLocation) {
            setLocation(queryLocation);
        }
    }, [searchParams]);

    // Hàm xử lý khi form được submit
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);  // Kích hoạt trạng thái tải khi tìm kiếm bắt đầu
        const params = new URLSearchParams();

        if (keyword.trim()) {
            params.append('keyword', keyword);
        }

        if (location.trim()) {
            params.append('location', location);
        }

        // Điều hướng tới URL với các tham số đã tạo
        router.push(`/search?${params.toString()}`);
        setLoading(false); // Tắt trạng thái loading sau khi điều hướng
    };

    return (
        <div>
            {loading ? (
                <p>Đang tìm kiếm...</p>
            ) : (
                <>
                    <h1>Từ khóa tìm kiếm: {keyword}</h1>
                    <h2>Vị trí: {location}</h2>
                    <form onSubmit={handleSearch}>
                        <div>
                            <input 
                                type="text" 
                                value={keyword} 
                                onChange={(e) => setKeyword(e.target.value)} 
                                placeholder="Nhập từ khóa tìm kiếm"
                            />
                        </div>
                        <div>
                            <input 
                                type="text" 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} 
                                placeholder="Nhập vị trí"
                            />
                        </div>
                        <button type="submit">Tìm kiếm</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default SearchPage;
