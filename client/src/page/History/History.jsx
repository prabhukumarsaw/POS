// Sample data for demonstration
const invoices = [
  {
      id: '#3066',
      date: 'Jan 6, 2022',
      status: 'Paid',
      customer: {
          name: 'Arthur Melo',
          email: 'authurmelo@example.com',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
      },
      purchase: 'Monthly subscription'
  },
  {
      id: '#3065',
      date: 'Jan 5, 2022',
      status: 'Cancelled',
      customer: {
          name: 'Andi Lane',
          email: 'andi@example.com',
          avatar: 'https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      },
      purchase: 'Monthly subscription'
  },
  // Add more sample data as needed
];

function HistoryPage() {
  
  return (
      <section className="container px-4 mx-auto">
          <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                      <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                              <thead className="bg-gray-50 dark:bg-gray-800">
                                  <tr>
                                      {/* Table header content */}
                                  </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                  {invoices.map((invoice, index) => (
                                      <tr key={index}>
                                          <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                              <div className="inline-flex items-center gap-x-3">
                                                  <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                  <span>{invoice.id}</span>
                                              </div>
                                          </td>
                                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{invoice.date}</td>
                                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                              <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${invoice.status === 'Paid' ? 'text-emerald-500 bg-emerald-100/60 dark:bg-gray-800' : 'text-red-500 bg-red-100/60 dark:bg-gray-800'}`}>
                                                  {/* Status icon and text */}
                                              </div>
                                          </td>
                                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                              <div className="flex items-center gap-x-2">
                                                  <img className="object-cover w-8 h-8 rounded-full" src={invoice.customer.avatar} alt={invoice.customer.name} />
                                                  <div>
                                                      <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{invoice.customer.name}</h2>
                                                      <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{invoice.customer.email}</p>
                                                  </div>
                                              </div>
                                          </td>
                                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{invoice.purchase}</td>
                                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                                              <div className="flex items-center gap-x-6">
                                                  <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                      Archive
                                                  </button>
                                                  <button className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                                      Download
                                                  </button>
                                              </div>
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex items-center justify-between mt-6">
              {/* Pagination buttons */}
          </div>
      </section>
  );
}

export default HistoryPage;
