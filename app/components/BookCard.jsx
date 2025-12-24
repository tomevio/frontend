// app/components/Discover/BookCard.jsx
export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3 cursor-pointer">
      <div className="h-40 bg-gray-200 rounded-lg mb-3" />

      <h3 className="font-semibold text-sm line-clamp-2">
        {book.title}
      </h3>
      <p className="text-xs text-gray-500">
        {book.author}
      </p>
    </div>
  );
}
