// export const googleClientId="166799978388-1uls89hu1uuv74sv96ce6q83juhmv5v3.apps.googleusercontent.com"
export const domainName = "http://127.0.0.1:8000";

export const api = {
  signup: "/api/signup",
  login: "/api/login",
  emailAvailability: "/api/isEmailPhoneNumberAvailable",
  profile: "/api/profile",
  updateProfileImg: "/api/update-profile-img",
  categories: "/api/get-categories-list",
  allProducts: "/api/get-all-products-list",
  recentProducts: "/api/get-recent-products",
  popularProducts: "/api/get-popular-products",
  categoryProducts: "/api/get-category-products/:categoryId",
  productInfo: "/api/get-product-info/",
  cart:'/api/get-cart',
  addToCart:'/api/add-to-cart'
};
