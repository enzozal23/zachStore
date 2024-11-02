import React from 'react';

function SkeletonCard() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 m-5 p-5">
            {/* Tarjetas de carga */}
            {[...Array(4)].map((_, i) => (
                <div key={i} className="relative max-w-xs bg-gray-200 rounded shadow-sm animate-pulse p-5">
                    <div className="aspect-w-1 aspect-h-1 bg-gray-300 w-full rounded-md" />
                    <div className="mt-4 space-y-3">
                        <div className="h-6 bg-gray-300 rounded w-3/4" />
                        <div className="h-36 bg-gray-300 rounded w-1/2" />
                    </div>
                    <div className="mt-4 h-10 bg-gray-300 rounded w-1/2 mx-auto" />
                </div>
            ))}
        </div>
    );
}

export default SkeletonCard;
