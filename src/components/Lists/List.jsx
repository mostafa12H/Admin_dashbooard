import React, { useState } from "react";
import Pagination from "./../Pagination/Pagination";

const List = ({
  data,
  columns,
  onEdit,
  onDelete,
  itemsPerPage = 5,
  title = "List",
}) => {
  const [items, setItems] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [editingItem, setEditingItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    if (onDelete) onDelete(id);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    const updatedItems = items.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
    setItems(updatedItems);
    setIsEditModalOpen(false);
    if (onEdit) onEdit(editingItem);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingItem({ ...editingItem, [name]: value });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const sortedItems = [...items].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredItems = sortedItems.filter((item) =>
    columns.some((col) =>
      item[col.key].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "▲" : "▼";
    }
    return "↕";
  };

  return (
    <div className="bg-gradient-to-r from-white to-gray-100 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 mt-1 mb-2 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto"
        />
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="text-left">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center">
                    {col.label}{" "}
                    <span className="ml-2">{getSortIcon(col.key)}</span>
                  </div>
                </th>
              ))}
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {columns.map((col) => (
                  <td key={col.key} className="p-2">
                    {col.render ? (
                      col.render(item)
                    ) : col.key === "name" && (item.image || item.avatar) ? (
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.image || item.avatar}
                          alt={item.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span>{item[col.key]}</span>
                      </div>
                    ) : (
                      item[col.key]
                    )}
                  </td>
                ))}
                <td className="p-2">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-indigo-500 hover:text-indigo-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2 2 0 00-2.828-2.828l-8 8v3z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalItems={filteredItems.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={paginate}
      />

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Edit {title.slice(0, -1)}
            </h3>
            {columns.map((col) => (
              <div className="mb-4" key={col.key}>
                <label className="block text-gray-900 dark:text-white mb-2">
                  {col.label}
                </label>
                <input
                  type={col.type || "text"}
                  name={col.key}
                  value={editingItem[col.key]}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            ))}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
