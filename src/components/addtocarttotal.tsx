"use client"
import React, { useState } from "react";

const CouponAndBill = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const cartSubtotal = 205; // Example cart subtotal
  const shippingCharge = 0;

  const handleApplyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10);
      alert("Coupon Applied! 10% Discount.");
    } else {
      alert("Invalid Coupon Code.");
    }
  };

  const totalAmount = cartSubtotal - (cartSubtotal * discount) / 100;

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 gap-6">
      {/* Coupon Code Section */}
      <div className="w-full md:w-1/2 bg-white shadow-md p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
        <p className="text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter Here code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-[#FF9F0D] text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Total Bill Section */}
      <div className="w-full md:w-1/2 bg-white shadow-md p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Cart Subtotal</span>
            <span>${cartSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Charge</span>
            <span>${shippingCharge.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-500">
              <span>Discount</span>
              <span>-{discount}%</span>
            </div>
          )}
          <div className="border-t border-gray-300 mt-2"></div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <button
          className="bg-[#FF9F0D] text-white w-full py-2 rounded-md mt-4 hover:bg-orange-600 transition"
          onClick={() => alert("Proceeding to Checkout...")}
        >
          Proceed to Checkout &rarr;
        </button>
      </div>
    </div>
  );
};

export default CouponAndBill;
