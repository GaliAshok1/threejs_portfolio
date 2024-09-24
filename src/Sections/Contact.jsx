import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_83z5567", // Your service ID
                "template_34zhyyk", // Updated template ID
                {
                    from_name: form.name,
                    to_name: "Ashok",
                    from_email: form.email,
                    to_email: "galiashok1433@gmail.com",
                    message: form.message,
                },
                "KpWziZvezppd3v26q" // Your public API key
            );
            setLoading(false);
            setForm({});
            alert("Your email has been sent!");
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong! Please try again.");
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            <h3 className="head-text">Ping Me *</h3>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">"React out!"</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you're aiming to build a cutting-edge website, enhance your current platform,
                        or bring a unique vision to life, I’m here to make it happen. Let’s turn your ideas into
                        impactful digital experiences.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-2">
                        <label className="space-y-3">
                            <span className="field-label">Full Name *</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter your Full Name..."
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email Address *</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="*********@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Message Me *</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Hi, Drop Me a Line......"
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
