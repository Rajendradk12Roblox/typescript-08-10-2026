/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

const product1: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageCustomerRating: number; isDiscounted: boolean } = {
    productCode: "PRD001",
    productName: "Wireless Headphones",
    sellingPrice: 99.99,
    stockQuantity: 150,
    productWeight: 0.5,
    averageCustomerRating: 4.5,
    isDiscounted: true
};
const product2: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageCustomerRating: number; isDiscounted: boolean } = {
    productCode: "PRD002",
    productName: "Smartphone",
    sellingPrice: 699.99,
    stockQuantity: 80,
    productWeight: 0.3,
    averageCustomerRating: 4.7,
    isDiscounted: false
};
const product3: { productCode: string; productName: string; sellingPrice: number; stockQuantity: number; productWeight: number; averageCustomerRating: number; isDiscounted: boolean } = {
    productCode: "PRD003",
    productName: "Laptop",
    sellingPrice: 1299.99,
    stockQuantity: 25,
    productWeight: 1.5,
    averageCustomerRating: 4.9,
    isDiscounted: true
};

console.log(product1);
console.log(product2);
console.log(product3);