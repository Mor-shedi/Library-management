import { check } from "express-validator";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";

export const checkoutBookValidator = [
  check("bookId")
    .isUUID(4)
    .withMessage("Invalid Input!")
    .custom((book_id) => {
      if (!book_id) {
        throw new Error("Book ID is required");
      }
      return true;
    }),
  check("borrowerId")
    .isUUID(4)
    .withMessage("Invalid Input!")
    .custom((borrower_id) => {
      if (!borrower_id) {
        throw new Error("Borrower ID is required");
      }
      return true;
    }),
  validationMiddleware,
];

export const returnedBookValidator = [
  check("checkout_id")
    .isUUID(4)
    .withMessage("Invalid Input!")
    .custom((checkout_id) => {
      if (!checkout_id) {
        throw new Error("Checkout ID is required");
      }
      return true;
    }),
];
