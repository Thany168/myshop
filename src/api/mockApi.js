

const initData = () => {
  // FORCE RESET (important)
  localStorage.removeItem("products");

  // Add 10 products
  localStorage.setItem("products", JSON.stringify([
    { id: 1, name: "Dog Food", price: 20 },
    { id: 2, name: "Cat Toy", price: 10 },
    { id: 3, name: "Bird Cage", price: 50 },
    { id: 4, name: "Fish Tank", price: 80 },
    { id: 5, name: "Dog Leash", price: 15 },
    { id: 6, name: "Cat Food", price: 18 },
    { id: 7, name: "Pet Shampoo", price: 12 },
    { id: 8, name: "Rabbit Food", price: 14 },
    { id: 9, name: "Hamster Wheel", price: 25 },
    { id: 10, name: "Pet Bed", price: 30 }
  ]));
};

initData();
  // Users (optional)
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([
      { id: 1, email: "admin@test.com", password: "1234", role: "admin" }
    ]));
  }

  // Orders (optional)
  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify([
      { id: 1, customer: "John", total: 100, status: "Pending" }
    ]));
};

// Run it once
initData();

// Helper: simulate delay (optional)
const delay = (data, time = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(data), time));

// Helper: get/set localStorage
const getStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const setStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

// Helper: generate ID
const generateId = () => Date.now();


// ==========================
// AUTH
// ==========================
export const login = (email, password) => {
  const users = getStorage("users");
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    return delay(user);
  } else {
    return Promise.reject("Invalid credentials");
  }
};

export const logout = () => {
  localStorage.removeItem("currentUser");
  return delay(true);
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};


// ==========================
// USERS
// ==========================
export const getUsers = () => delay(getStorage("users"));

export const addUser = (user) => {
  const users = getStorage("users");
  user.id = generateId();
  users.push(user);
  setStorage("users", users);
  return delay(user);
};

export const updateUser = (updatedUser) => {
  let users = getStorage("users");
  users = users.map((u) => (u.id === updatedUser.id ? updatedUser : u));
  setStorage("users", users);
  return delay(updatedUser);
};

export const deleteUser = (id) => {
  let users = getStorage("users");
  users = users.filter((u) => u.id !== id);
  setStorage("users", users);
  return delay(true);
};


// ==========================
// PRODUCTS
// ==========================
export const getProducts = () => delay(getStorage("products"));

export const addProduct = (product) => {
  const products = getStorage("products");
  product.id = generateId();
  products.push(product);
  setStorage("products", products);
  return delay(product);
};

export const updateProduct = (updatedProduct) => {
  let products = getStorage("products");
  products = products.map((p) =>
    p.id === updatedProduct.id ? updatedProduct : p
  );
  setStorage("products", products);
  return delay(updatedProduct);
};

export const deleteProduct = (id) => {
  let products = getStorage("products");
  products = products.filter((p) => p.id !== id);
  setStorage("products", products);
  return delay(true);
};


// ==========================
// CATEGORIES
// ==========================
export const getCategories = () => delay(getStorage("categories"));

export const addCategory = (category) => {
  const categories = getStorage("categories");
  category.id = generateId();
  categories.push(category);
  setStorage("categories", categories);
  return delay(category);
};


// ==========================
// ORDERS
// ==========================
export const getOrders = () => delay(getStorage("orders"));

export const addOrder = (order) => {
  const orders = getStorage("orders");
  order.id = generateId();
  order.status = "Pending";
  orders.push(order);
  setStorage("orders", orders);
  return delay(order);
};

export const updateOrderStatus = (id, status) => {
  let orders = getStorage("orders");
  orders = orders.map((o) =>
    o.id === id ? { ...o, status } : o
  );
  setStorage("orders", orders);
  return delay(true);
};


// ==========================
// VENDORS
// ==========================
export const getVendors = () => delay(getStorage("vendors"));

export const addVendor = (vendor) => {
  const vendors = getStorage("vendors");
  vendor.id = generateId();
  vendors.push(vendor);
  setStorage("vendors", vendors);
  return delay(vendor);
};


// ==========================
// SERVICES
// ==========================
export const getServices = () => delay(getStorage("services"));

export const addService = (service) => {
  const services = getStorage("services");
  service.id = generateId();
  services.push(service);
  setStorage("services", services);
  return delay(service);
};


// ==========================
// PAYMENTS (Mock)
// ==========================
export const processPayment = (orderId) => {
  return delay({
    orderId,
    status: "Paid",
  });
};


// ==========================
// DASHBOARD
// ==========================
export const getDashboardStats = async () => {
  const users = getStorage("users");
  const products = getStorage("products");
  const orders = getStorage("orders");

  const totalRevenue = orders.reduce(
    (sum, o) => sum + (o.total || 0),
    0
  );

  return delay({
    totalUsers: users.length,
    totalProducts: products.length,
    totalOrders: orders.length,
    totalRevenue,
  });
};