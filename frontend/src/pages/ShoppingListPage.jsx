import { useState } from "react";

const ShoppingListPage = () => {
  const [formData, setFormData] = useState("");
  const [shoppingListItem, setShoppingListItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.trim()) return;

    setShoppingListItem((prevList) => [...prevList, formData]);

    setFormData("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full px-4">
      {/* 🛒 Shopping List */}
      <ul className="mb-6 w-full max-w-md text-black list-disc pl-6">
        {shoppingListItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* 📝 Form */}
      <form
        onSubmit={handleSubmit}
        className="border border-white p-4 rounded flex space-x-2"
      >
        <input
          type="text"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          className="border px-2 py-1 rounded"
          placeholder="Enter item"
        />
        <button
          type="submit"
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ShoppingListPage;
