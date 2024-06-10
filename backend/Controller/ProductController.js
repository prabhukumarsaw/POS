import prisma from "../Database/db.config.js";

const home = async (req, res) => {
    try {
      res.status(200).send("Welcome to Home Page");
    } catch (error) {
      console.log(error);
    }
  };

const addProduct = async (req, res) => {
   
    try {
        const {name, brand, quantity, category, image, price} = req.body;

        //basic validation

        if(!name || !brand || !quantity || !category || !image || !price){
            return res.status(400).json({ msg: "Missing required fields" });
          }

        const newProduct = await prisma.product.create({
            data: {
                name: name,
                brand: brand,
                quantity: quantity,
                category: category,
                image: image,
                price: price,
            }
        });
    
        console.log("Created user: ", newProduct);
        return res.status(200).json({msg: "Product Added Successfull", newProduct})

    } catch (error) {
        console.error("Error Product: ", error);
        return res.status(500).json({ error: "Server error" });
    }
   
}

const viewAllProduct = async (req, res) => {
  try {
    const allProduct = await prisma.product.findMany();
    res.status(201).json({
      count: allProduct.length,
      data: allProduct
    })
    
  } catch (error) {
      console.error(error);
      res.status(501).json({msg:" please check Server"})
  }
}

const viewOneProduct = async (req, res) => {
  try {
    const id = +req.params.id;

    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }
   
    const oneProduct = await prisma.product.findUnique({
      where: { id: id },
    });
    


    if (oneProduct) {
      res.status(200).json({ data: oneProduct });
    } else {
      res.status(404).json({ msg: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
}

const updateProduct = async (req, res) => {
  const id = +req.params.id; // Using unary plus operator
  // Alternatively: const id = Number(req.params.id);

  const { name, brand, quantity, category, image, price } = req.body;
  
  try {
    // Check if id is a valid number
    if (isNaN(id)) {
      return res.status(400).json({ msg: "Invalid Product id" });
    }
    
    // Update the product
    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: {
        name: name,
        brand: brand,
        quantity: quantity,
        category: category,
        image: image,
        price: price
      }
    });

    // Check if product was updated successfully
    if (updatedProduct) {
      return res.status(200).json({ data: updatedProduct });
    } else {
      return res.status(404).json({ msg: "Product not found" });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteProduct = async (req, res) => {
  try {
    // Convert id to an integer
    const id = +req.params.id;

    // Check if id is a valid number
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    // Check if the product exists before deleting
    const existingProduct = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!existingProduct) {
      return res.status(404).json({ message: 'Product Not Found' });
    }

    // Delete the product
    await prisma.product.delete({
      where: { id: id },
    });

    return res.status(200).json({ message: 'Product Deleted Successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};












export default {home, addProduct, viewAllProduct, viewOneProduct, updateProduct, deleteProduct}