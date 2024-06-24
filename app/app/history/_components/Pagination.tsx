"use client"

import { useRouter } from "next/navigation";
import { Button, Flex, } from "@chakra-ui/react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const router = useRouter();

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            router.push(`?page=${page}&per_page=5`)
        }
    };

    return (
        <Flex alignItems="center"
            justifyContent="center"
            className="mt-4 max-w-4xl">
            <div className="flex items-center gap-4">
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    isDisabled={currentPage === 1}
                    variant='unstyled'
                    size='xs'
                    className="text-xs font-bold  text-gray-900 uppercase  disabled:pointer-events-none disabled:opacity-50 "
                >
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                        </svg>
                        Previous
                    </div>
                </Button>
                <div className="flex items-center gap-2">
                    {
                        Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i}
                                variant='unstyled'
                                onClick={() => handlePageChange(i + 1)}
                                size='xs'
                                className={`relative h-5 w-5 select-none text-center align-middle text-xs font-medium  transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${currentPage === i + 1 ? 'bg-gray-900 text-white   focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] ' : ''}`}
                                type="button"
                                style={{
                                    backgroundColor: currentPage === i + 1 ? '#232354' : '',
                                    color: currentPage === i + 1 ? 'white' : 'gray',
                                    borderRadius: '100%'
                                }}
                            >
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    {i + 1}
                                </span>
                            </Button>
                        ))
                    }
                </div>
                <Button
                    variant='unstyled'
                    onClick={() => handlePageChange(currentPage + 1)}
                    isDisabled={currentPage === totalPages}
                    size='xs'
                    className="text-xs font-bold  text-gray-900 uppercase  disabled:pointer-events-none disabled:opacity-50"
                    type="button">
                    <div className="flex gap-2 items-center">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                    </div>
                </Button>
            </div>
        </Flex>
    );
};
