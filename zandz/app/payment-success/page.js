'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, Gift, CreditCard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/cart'

export default function PaymentSuccessPage() {

    const router = useRouter();
    const searchParams = useSearchParams()
    const amount = searchParams.get('amount')

    // Use Cart Context to clear cart state
    const { clearCart } = useCart();

    // Redirect after 5 seconds and clear the cart
    useEffect(() => {
        localStorage.removeItem('cart');
        clearCart();

        const timeoutId = setTimeout(() => {
            router.push('/');
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [clearCart, router]);

    return (
        <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center space-y-6">
                <CheckCircle2
                    className="mx-auto text-green-500"
                    size={80}
                    strokeWidth={1.5}
                />

                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Payment Successful
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Thank you for your purchase!
                    </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <CreditCard className="text-green-500" size={24} />
                        <span className="font-medium text-gray-700">Total Paid</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">
                        ${amount}
                    </span>
                </div>

                <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <Gift size={20} />
                    <p>An email confirmation has been sent to you</p>
                </div>

                <button className="w-full bg-button text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                    Continue Ordering
                </button>
            </div>
        </div>
    )
}