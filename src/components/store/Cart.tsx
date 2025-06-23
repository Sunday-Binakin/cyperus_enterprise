'use client';

import { useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const updateQuantity = (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCartItems(items =>
            items.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (itemId: string) => {
        setCartItems(items => items.filter(item => item.id !== itemId));
    };

    return (
        <>
            {/* Cart Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed z-50 bottom-8 right-8 bg-[#475A22] text-white p-4 rounded-full shadow-lg hover:bg-[#475A22]/90 transition-all duration-300"
            >
                <ShoppingBag className="w-6 h-6" />
            </button>

            {/* Cart Sidebar */}
            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />

                    <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b">
                                <h2 className="text-xl font-semibold text-[#475A22]">Your Cart</h2>
                                <button onClick={() => setIsOpen(false)}>
                                    <X className="w-6 h-6 text-gray-500" />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-8">
                                        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-500">Your cart is empty</p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {cartItems.map(item => (
                                            <div key={item.id} className="flex items-center space-x-4">
                                                <div className="relative w-20 h-20">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover rounded-lg"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">${item.price}</p>
                                                    <div className="flex items-center space-x-2 mt-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="text-gray-500 hover:text-[#475A22]"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="text-gray-500 hover:text-[#475A22]"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-red-500"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="border-t p-6">
                                <div className="flex justify-between mb-4">
                                    <span className="font-medium">Total</span>
                                    <span className="font-bold">${totalAmount.toFixed(2)}</span>
                                </div>
                                <button
                                    className="w-full bg-[#475A22] text-white py-3 rounded-full hover:bg-[#475A22]/90 transition-colors"
                                    disabled={cartItems.length === 0}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 