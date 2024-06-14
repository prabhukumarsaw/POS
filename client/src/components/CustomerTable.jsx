import React from 'react'

const CustomerTable = () => {
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Transaction Date</th>
        <th>Status</th>
        <th>Type</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            
            <div>
              <div className="font-bold">Sharma Ji</div>
              <div className="text-sm opacity-50">noname@noname.com</div>
            </div>
          </div>
        </td>
        <td>
          23 june 2024
          
        </td>
        <td>paid</td>
        <td>cash</td>
        <td className=' text-green-500 font-bold'>+309.25</td>
        <th>
        <button className="btn btn-info mr-2 btn-xs">Modify</button>
          <button className="btn btn-warning mr-2 btn-xs">Invoice</button>
          <button className="btn btn-success btn-xs">Deposit</button>
        </th>
      </tr>
    
    </tbody>

    
  </table>
</div>
    </div>
  )
}

export default CustomerTable