import prisma from "../Database/db.config.js";

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to Home Page");
  } catch (error) {
    console.log(error);
  }
};

const addCustomer = async (req, res) => {
  const { phone, totalAmount, paymentMethod, orderDetails } = req.body;

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
          credit: paymentMethod === 'credit' ? totalAmount : 0, // Set initial credit to the total amount for credit payments only
        },
      });
    } else {
      // Update the customer's credit only for credit payment method
      if (paymentMethod === 'credit') {
        customer = await prisma.customer.update({
          where: { phone },
          data: {
            credit: customer.credit + totalAmount, // Add the total amount to the existing credit
          },
        });
      }
    }

    // Create a new order for the customer
    const order = await prisma.order.create({
      data: {
        customerId: customer.id,
        totalAmount: parseFloat(totalAmount),
        status: paymentMethod === 'credit' ? "unpaid" : "paid", // Set status based on payment method
        orderDetails: {
          create: orderDetails.map(detail => ({
            productId: detail.productId,
            quantity: detail.quantity,
            price: detail.price,
          })),
        },
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
    });
  } catch (error) {
    console.error(error);
    res.status(501).json({ msg: "Please check server" });
  }
}

const viewOneCustomer = async (req, res) => {
  try {
    const id = +req.params.id; // Convert id to a number

    // Fetch customer details including their orders and orderDetails
    const customer = await prisma.customer.findUnique({
      where: { id: id },
      include: {
        order: {
          include: {
            orderDetails: {
              include: {
                product: true // Include product details in orderDetails
              }
            }
          }
        }
      }
    });

    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json({ data: customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};


const updateCustomer = async (req, res) => {
  const { id } = req.params;

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

    // Check if customer was updated successfully
    if (customer) {
      return res.status(200).json({ msg: "Customer Data Updated Successfully", data: customer });
    } else {
      return res.status(404).json({ msg: "Customer not found" });
    }
  } catch (error) {
    console.error('Error updating customer:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteCustomer = async (req, res) => {
  try {
    // Convert id to an integer
    const { id } = req.params;

    // Check if the customer exists before deleting
    const existingCustomer = await prisma.customer.findUnique({
      where: { id: Number(id) },
    });

    if (!existingCustomer) {
      return res.status(404).json({ message: 'Customer Not Found' });
    }

    // Delete the customer
    await prisma.customer.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: 'Customer Deleted Successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { home, addCustomer, viewAllCustomer, viewOneCustomer, updateCustomer, deleteCustomer };
