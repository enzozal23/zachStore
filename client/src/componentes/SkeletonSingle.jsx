function SkeletonSingle() {
    return (
        <>
            <div className="relative max-w-xs m-5 p-5 bg-gray-200 rounded shadow-sm animate-pulse sm:max-w-sm sm:m-3 md:m-5">
                <div className="aspect-w-1 aspect-h-1 bg-gray-300 w-full rounded-md" />
                <div className="mt-4 space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-3/4" />
                    <div className="h-36 bg-gray-300 rounded w-1/2" />
                </div>
                <div className="mt-4 h-10 bg-gray-300 rounded w-1/2 mx-auto" />
            </div>

        </>
    )
}

export default SkeletonSingle