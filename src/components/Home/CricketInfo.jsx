import React from 'react';

export default function CricketInfo() {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-2xl font-semibold text-center mb-6">Evolution of the Cricket Ball</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With the ICC Men’s Cricket World Cup going on, let’s take a look at how the cricket ball evolved.
                The bat may be the heart of cricket, but the ball is its soul. Cricket began as a game played by
                bored shepherds, and so the ball is at least as old as the game. But the modern ball’s journey
                began in 1775 when Duke and Sons received a royal patent from King George VI and was first used in
                a series in 1780.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <img
                    src="https://static.wixstatic.com/media/412cf2_e2498b53938c4a9ea0c90d821a097997~mv2.jpg/v1/fill/w_1000,h_524,al_c,q_85,usm_0.66_1.00_0.01/412cf2_e2498b53938c4a9ea0c90d821a097997~mv2.jpg"
                    alt="Vintage Cricket Ball"
                    className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"
                />
                <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed md:pl-6">
                    These balls were made by highly skilled craftsmen in Kent, England. The core was made of cork
                    tightly wound with string to provide weight and bounce. It was wrapped in leather with a
                    stitched seam to give bowlers grip and allow swing, spin, flight, and speed to take wickets.
                </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cricket became popular in British colonies, and in the 1890s, an Australian company called
                Kookaburra began manufacturing cricket balls. In India, brothers Kedarnath and Dwarkanath founded
                Sanspareils Greenlands (SG) in Sialkot (now in Pakistan) in 1931 to manufacture cricket balls. The
                company moved to Meerut after the Partition of India. Even today, Dukes and SG balls continue to be
                hand-made.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="md:w-1/2 text-lg text-gray-700 leading-relaxed mb-4 md:mb-0 md:pr-6">
                    Kookaburra, Dukes, and SG are the three major manufacturers of cricket balls, each having
                    unique characteristics that impact how the ball behaves on different pitches and conditions.
                </p>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZnn51kXFuChANdCxUSfTyQrsV9pw00fu5g&s"
                    alt="Modern Cricket Ball"
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
