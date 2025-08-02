import React from 'react'
const ContactPage = () => {
    return (
        <div className=" bg-yellow-200  max-w-full mx-auto px-4 py-10" >
            <div className='max-w-5xl mx-auto'>
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 min-w-[300px] space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                            <p className="text-gray-700">
                                kazoma-industries-private-limited
                                <br />
                                Khasra No. 26/11/1 Ground Floor, <br />
                                Near R.B.M School, Village Bakkarwala<br />
                                New Delhi-110041
                                <br />

                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                            <p className="text-gray-700">
                                Phone:{" "}
                                <a
                                    href="tel:+8416800849"
                                    className="text-blue-600 hover:underline"
                                >
                                    +91 8416800849
                                </a>
                                <br />
                                Email:{" "}
                                <a
                                    href="mailto:info@kazoma.co.in"
                                    className="text-blue-600 hover:underline"
                                >
                                    info@kazoma.co.in
                                </a>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Find Us Here</h3>

                            <iframe
                                title="kazoma-industries-private-limited"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28017.28880339363!2d77.02300287431638!3d28.62493340000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051905218173%3A0xc079e496aa40fb7a!2sKazoma%20Industries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1750356719437!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                className="rounded shadow"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="flex-1 min-w-[300px]">
                        <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                        <form className="bg-white rounded shadow p-6 space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">
                                    Message:
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;