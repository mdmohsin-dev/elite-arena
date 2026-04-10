import { useState } from "react";

const plans = [
    {
        name: "Basic",
        price: "$99",
        period: "/ month",
        features: [
            { text: "Court Booking (Standard)", included: true },
            { text: "Access to Regular Time Slots", included: true },
            { text: "Max 3–5 bookings per month", included: true },
            { text: "View Booking History", included: true },
            { text: "No discounts", included: false },
            { text: "No cancellation flexibility", included: false },
        ],
        checkStyle: "bg-green-100 text-green-700",
        btnStyle: "bg-green-100 text-green-700 hover:bg-green-200",
        cardStyle: "bg-white border border-gray-200",
        nameStyle: "text-gray-900",
        priceStyle: "text-gray-900",
        periodStyle: "text-gray-400",
        dividerStyle: "bg-gray-200",
        featureStyle: "text-gray-500",
        featured: false,
        buttonText:'Get started'
    },
    {
        name: "Pro",
        price: "$299",
        period: "/ month",
        features: [
            { text: "Everything in Starter", included: true },
            { text: "Priority Booking", included: true },
            { text: "Discounted Court Prices (10–15%)", included: true },
            { text: "10–15 bookings per month", included: true },
            { text: "Cancel Booking (limited free)", included: true },
            { text: "Real-time Slot Availability", included: true },
            { text: "Priority Support", included: true },
            { text: "No early access to new features", included: false },
            { text: "No access to exclusive/premium courts", included: false },
        ],
        checkStyle: "bg-white/25 text-white",
        btnStyle: "bg-white text-blue-700 hover:bg-blue-50",
        cardStyle: "bg-blue-700 border-2 border-blue-700 -my-6",
        nameStyle: "text-white",
        priceStyle: "text-white",
        periodStyle: "text-white/70",
        dividerStyle: "bg-white/25",
        featureStyle: "text-white/90",
        featured: true,
        popularTag: "Most popular",
        buttonText:'Upgrade now'
    },
    {
        name: "Elite",
        price: "$799",
        period: "/ month",
        features: [
            { text: "Everything in Pro", included: true },
            { text: "Unlimited Bookings", included: true },
            { text: "Exclusive Courts Access", included: true },
            { text: "Full Free Cancellation", included: true },
            { text: "Early Access to New Features", included: true },
            { text: "Dedicated / Premium Support", included: true },
        ],
        checkStyle: "bg-purple-100 text-purple-700",
        btnStyle: "bg-purple-600 text-white hover:bg-purple-700",
        cardStyle: "bg-white border border-gray-200",
        nameStyle: "text-gray-900",
        priceStyle: "text-gray-900",
        periodStyle: "text-gray-400",
        dividerStyle: "bg-gray-200",
        featureStyle: "text-gray-500",
        featured: false,
        buttonText:'Go elite'
    },
];

export default function MembershipPlans() {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="lg:pt-44 md:pt-24 pt-20  pb-24 max-w-330 mx-auto px-6">
            <div className="text-center">
                <h1 className="text-[#4A5565] font-exo md:text-5xl text-4xl font-bold">Membership Plans</h1>
                <p className="text-black lg:w-9/12 lg:px-0 md:px-6 px-2 mx-auto pt-5">Whether you're a casual player booking occasionally or a dedicated athlete playing regularly, our flexible membership plans are designed to give you the best value, priority access to courts, and a seamless booking experience every time</p>
            </div>
            <div className="mt-16 lg:max-w-full md:max-w-lg mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-10 lg:gap-6 gap-16 w-full  items-center">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className={`
              relative rounded-2xl p-7 flex flex-col gap-5 transition-transform duration-150
              ${plan.cardStyle}
              
              ${hovered === i ? "-translate-y-1" : ""}
            `}
                        >
                            {plan.popularTag && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-700 text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                                    {plan.popularTag}
                                </div>
                            )}

                            <div>
                                <p className={`text-4xl font-semibold mt-2 ${plan.nameStyle}`}>{plan.name}</p>
                            </div>

                            <div className="flex items-baseline gap-1">
                                <span className={`text-3xl font-medium leading-none ${plan.priceStyle}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-sm ${plan.periodStyle}`}>{plan.period}</span>
                            </div>

                            <div className={`h-px ${plan.dividerStyle}`} />

                            <ul className="flex flex-col gap-2.5">
                                {plan.features.map((feature, j) => (
                                    <li
                                        key={j}
                                        className={`flex items-center gap-2.5 text-sm ${feature.included ? plan.featureStyle : "opacity-40 " + plan.featureStyle
                                            }`}
                                    >
                                        <span
                                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${feature.included
                                                    ? plan.checkStyle
                                                    : plan.featured
                                                        ? "bg-white/15 text-white/50"
                                                        : "bg-gray-100 text-gray-400"
                                                }`}
                                        >
                                            {feature.included ? "✓" : "✕"}
                                        </span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-auto w-full py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 cursor-pointer ${plan.btnStyle}`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}