"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const BlogPosts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;
    const totalPosts = 8; // Total number of posts
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Parse `page` query parameter from URL
    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const queryPage = Number(urlParams.get("page")) || 1;
            setCurrentPage(queryPage);
        }
    }, []);

    // Update URL manually without using `useRouter`
    const updatePageInURL = (page: number) => {
        if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.searchParams.set("page", page.toString());
            window.history.pushState({}, "", url.toString());
        }
        setCurrentPage(page);
    };

    // Blog posts data
    const allPosts = [
        {
            image: "/blogpg1.svg",
            title: "10 Reasons To Do A Digital Detox Challenge",
            date: "June 28, 2023",
            comments: 15,
            author: "Admin",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            link: "/post/1",
        },
        {
            image: "/blogpg2.svg",
            title: "Traditional Soft Pizzas with Sweet Beer Cheese",
            date: "June 27, 2023",
            comments: 20,
            author: "Admin",
            description: "Discover the best recipes for sweet beer cheese pizzas.",
            link: "/post/2",
        },
        {
            image: "/bloggal1.svg",
            title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
            date: "June 26, 2023",
            comments: 10,
            author: "Admin",
            description: "A perfect recipe for recovering after a long night—easy to make and delicious.",
            link: "/post/3",
        },
        {
            image: "/blogpg4.svg",
            title: "My Favorite Easy Avocado Pizza Toast Recipe",
            date: "June 25, 2023",
            comments: 8,
            author: "Admin",
            description: "This avocado pizza toast recipe is healthy, easy, and perfect for breakfast.",
            link: "/post/4",
        },
        {
            image: "/bloggal3.svg",
            title: "How to Cook Perfect Steak Every Time",
            date: "June 24, 2023",
            comments: 12,
            author: "Chef John",
            description: "Learn the secrets to cooking a juicy and tender steak every time.",
            link: "/post/5",
        },
        {
            image: "/bloggal4.svg",
            title: "Refreshing Summer Salad Recipes You Must Try",
            date: "June 23, 2023",
            comments: 18,
            author: "Chef Emma",
            description: "Delicious and healthy summer salad recipes perfect for hot days.",
            link: "/post/6",
        },
        {
            image: "/bloggal5.svg",
            title: "Ultimate Guide to Making Artisan Bread at Home",
            date: "June 22, 2023",
            comments: 22,
            author: "Admin",
            description: "Master the art of making crusty, flavorful artisan bread at home.",
            link: "/post/7",
        },
        {
            image: "/blogggal2.svg",
            title: "5 Healthy Smoothie Bowls for a Quick Breakfast",
            date: "June 21, 2023",
            comments: 10,
            author: "Health Guru",
            description: "Quick and healthy smoothie bowl recipes for a nutritious start to your day.",
            link: "/post/8",
        },
    ];

    // Calculate posts to display for the current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

    return (
        <div className="space-y-6">
            {currentPosts.map((post) => (
                <div
                    key={post.link}
                    className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                    <Image
                        src={post.image}
                        alt={`Blog post image for ${post.title}`}
                        width={871}
                        height={520}
                        className="object-cover"
                    />
                    <div className="p-4 flex flex-col space-y-4">
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.comments} Comments</span>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="text-gray-600 text-sm">{post.description}</p>
                        <Link
                            href={post.link}
                            className="self-start px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => updatePageInURL(page)}
                        className={`px-4 py-2 ${
                            page === currentPage
                                ? "bg-orange-400 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        } rounded`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogPosts;
