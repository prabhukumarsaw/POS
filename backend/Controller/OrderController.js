import prisma from "../Database/db.config.js";

// Fetch all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        customer: true,
        orderDetails: {
          include: {
            product: true, // Include product details
          },
        },
      },
    });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

// Fetch a single order by ID
const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        customer: true,
        orderDetails: {
          include: {
            product: true, // Include product details
          },
        },
      },
    });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Error fetching order' });
  }
};

// Create a new order
const createOrder = async (req, res) => {
  const { customerId, totalAmount, status, orderDetails } = req.body;
  try {
    const newOrder = await prisma.order.create({
      data: {
        customerId: parseInt(customerId),
        totalAmount: parseInt(totalAmount),
        status,
        orderDetails: {
          createMany: {
            data: orderDetails.map(detail => ({
              productId: parseInt(detail.productId),
              quantity: detail.quantity,
              price: parseFloat(detail.price),
            })),
          },
        },
      },
      include: {
        customer: true,
        orderDetails: {
          include: {
            product: true, // Include product details
          },
        },
      },
    });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Error creating order' });
  }
};

export default {
  getAllOrders,
  getOrderById,
  createOrder,
};
