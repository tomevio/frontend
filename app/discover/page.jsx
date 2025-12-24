"use client";

import { Search, Sidebar } from "lucide-react";
import BookCard from "../components/BookCard";
const categories = [
  "All",
  "Fiction",
  "Non-fiction",
  "Romance",
  "Fantasy",
  "Mystery",
  "Self-help",
];

const books = [
  { id: 1, title: "The Maze Runner", author: "James Dashner" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 3, title: "Atomic Habits", author: "James Clear" },
  { id: 4, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 5, title: "Ikigai", author: "Héctor García" },
  { id: 6, title: "The Silent Patient", author: "Alex Michaelides" },
];

export default function DiscoverPage() {
  return (
    
    <div className="space-y-6">
        <Sidebar />
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold">Discover Books</h1>
        <p className="text-gray-500 text-sm">
          Explore new books and find your next read
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search books, authors..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-1.5 rounded-full border text-sm whitespace-nowrap
                       hover:bg-green-950 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
