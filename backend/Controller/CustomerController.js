import prisma from "../Database/db.config.js";

const home = async (req, res) => {
    try {
      res.status(200).send("Welcome to Home Page");
    } catch (error) {
      console.log(error);
    }
  };

  const addCustomer = async (req, res) => {
    const { phone, totalAmount } = req.body;

  try {
    // Find the customer by phone number
    let customer = await prisma.customer.findUnique({
      where: { phone },
    });

    // If the customer does not exist, create a new one
    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          phone,
          credit: totalAmount, // Set initial credit to the total amount
        },
      });
    } else {
      // Update the customer's credit
      customer = await prisma.customer.update({
        where: { phone },
        data: {
          credit: customer.credit + totalAmount, // Add the total amount to the existing credit
        },
      });
    }

    // Create a new order for the customer
    const order = await prisma.order.create({
      data: {
        customerId: customer.id,
        totalAmount: parseFloat(totalAmount),
        status: "unpaid", // Set status based on your business logic
      },
    });

    res.json({ customer, order });
  } catch (error) {
    console.error("Error Customer: ", error);
    return res.status(500).json({ error: "Server error" });
  }
};

const viewAllCustomer = async (req, res) => {
  try {
    const customer = await prisma.customer.findMany();
    res.status(201).json({
      count: customer.length,
      data: customer
    })
    
  } catch (error) {
      console.error(error);
      res.status(501).json({msg:" please check Server"})
  }
}

const viewOneCustomer = async (req, res) => {
  try {
    const  id  = +req.params.id; // Assuming product name is passed as a query parameter

   
    const customer = await prisma.customer.findUnique({
      where: { id: id },
    });
    


    if (!customer) {
        return res.status(404).json({ error: "customer not found" });
      
    } else {
        res.status(200).json({ data: customer });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
}

const updateCustomer = async (req, res) => {
  const {id} = req.params; 

  const { name, phone, email, address, company, credit } = req.body;
  
  try {   
    // Update the customer
    const customer = await prisma.customer.update({
      where: { id: Number(id) },
      data: {
        name: name,
        phone: phone,
        email: email,
        address: address,
        company: company,
        credit: credit,
      }
    });

    // Check if product was updated successfully
    if (customer) {
      return res.status(200).json({ msg: "Cutomer Data Updated Successfully", data: customer });
    } else {
      return res.status(404).json({ msg: "customer not found" });
    }
  } catch (error) {
    console.error('Error updating customer:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteCustomer = async (req, res) => {
  try {
    // Convert id to an integer
    const {id} = req.params;

 
    // Check if the product exists before deleting
    const existingCustomer = await prisma.customer.findUnique({
      where: { id: Number(id) },
    });

    if (!existingCustomer) {
      return res.status(404).json({ message: 'customer Not Found' });
    }

    // Delete the product
    await prisma.customer.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: 'customer Deleted Successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



export default {home, addCustomer, viewAllCustomer, viewOneCustomer, updateCustomer, deleteCustomer}