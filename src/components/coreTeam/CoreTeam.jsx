import React from "react";


const topMember = {
    name: "Dr.V.Chellapondy DSW",
    role: "Financial & Business Advisor",
    image: "https://via.placeholder.com/150",

};

const otherMembers = [
    {
        name: "R.K.Selvamani",
        role: "Film Director & Producer",
        image: "https://via.placeholder.com/120",

    },
    {
        name: "Dr. KP Kosygan",
        role: "Senior Orthopaedic Consultant",
        image: "https://via.placeholder.com/120",

    },
    {
        name: "S.Vasu",
        role: "Technocrat & Media Industry",
        image: "https://via.placeholder.com/120",

    },
    {
        name: "C.Arvind",
        role: "Founding Engineer",
        image: "https://via.placeholder.com/120",

    },
];

export default function CoreTeam() {
    return (
        <section className="py-16 bg-gradient-to-b from-teal-800 to-teal-600 text-white text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-12">CORE TEAM</h2>

            {/* Top Member */}
            <div className="flex justify-center mb-16">
                <div className="text-white text-center">
                    <img
                        src={topMember.image}
                        alt={topMember.name}
                        className="w-24 h-24 mx-auto rounded-full border-4 border-teal-500 mb-4 object-cover"
                    />
                    <h3 className="text-lg font-bold">{topMember.name}</h3>
                    <p className="text-white font-medium">{topMember.role}</p>
                    <p className="text-sm mt-2">{topMember.description}</p>
                </div>
            </div>


            {/* Four Members Below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

                {otherMembers.map((member, index) => (
                    <div key={index} className="text-white text-center">

                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full border-4 border-teal-500 mb-4 object-cover"
                        />
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-white font-medium">{member.role}</p>
                        <p className="text-white text-sm mt-2">{member.description}</p>
                    </div>
                ))}

            </div>

            {/* Logo and tagline */}
            <div className="mt-16 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                        src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1758609670/daily-money_fbjvzk.png"
                        alt="Logo"
                        className="w-full h-full object-contain animate-bounce"
                    />
                </div>

                <h1 className="text-yellow-200 md:text-4xl font-semibold tracking-wider uppercase mt-2 animate-pulse">
                    DAILY MONEY
                </h1>

                
                <h1 className="text-yellow-200 md:text-4xl font-semibold tracking-wider uppercase mt-2 animate-pulse">
  Independent for Entire Life
</h1>

            </div>

        </section>
    );
}
