/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status === "completed");

const totalValuePerOrder = completedOrders.map(order => ({
    ...order,
    totalValue: order.items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));

const customerSpending = totalValuePerOrder.reduce((acc, order) => {
    if (!acc[order.customer]) {
        acc[order.customer] = 0;
    }
    acc[order.customer] += order.totalValue;
    return acc;
}, {});

const highestSpendingCustomer = Object.entries(customerSpending).reduce((highest, [customer, spending]) => {
    return spending > highest[1] ? [customer, spending] : highest;
}, ["", 0]);

const totalRevenue = totalValuePerOrder.reduce((sum, order) => sum + order.totalValue, 0);

const allPurchasedProducts = [...new Set(totalValuePerOrder.flatMap(order => order.items.map(item => item.product)))];

console.log("Completed Orders:", completedOrders);
console.log("Total Value Per Order:", totalValuePerOrder);
console.log("Customer Spending:", customerSpending);
console.log("Highest Spending Customer:", highestSpendingCustomer);
console.log("Total Revenue:", totalRevenue);
console.log("All Purchased Products:", allPurchasedProducts);