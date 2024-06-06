import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    // Extract the JWT token from the Authorization header
    const token = req.header('Authorization');

    // Check if token is present
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.SECERETKEY);

        // Add user from payload to request object
        req.user = decoded.user;
        next(); // Continue with the next middleware or route handler
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default authenticateToken;
