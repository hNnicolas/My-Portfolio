import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ContactForm = () => {
    const { t } = useTranslation("common");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        latitude: "",
        longitude: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData((prev) => ({
                        ...prev,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }));
                },
                () => {
                    setError(t("contact.geolocation_error"));
                }
            );
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://api.web3forms.com/submit", {
                access_key: process.env.REACT_APP_WEB3FORM_API_KEY,
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });
            if (response.data.success) {
                setIsSubmitted(true);
                setSuccessMessage(t("contact.success_message"));
                // Réinitialiser uniquement les champs du formulaire
                setFormData((prev) => ({
                    ...prev,
                    name: "",
                    email: "",
                    message: "",
                }));
                setTimeout(() => setSuccessMessage(""), 5000);
            }
        } catch (error) {
            setError(t("contact.error_message"));
        }
    };

    // Custom icon for the marker
    const customIcon = new L.Icon({
        iconUrl: "/location-icon.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
    });

    return (
        <div
            id="ContactForm"
            className="bg-gray-800 text-white px-4 py-6 rounded-2xl shadow-lg w-full lg:w-4/5 mx-auto mt-10 flex flex-col lg:flex-row"
        >
            <div className="w-full lg:w-1/2 lg:pl-4 mb-6 lg:mb-0">
                <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">
                    {t("contact.title")}
                </h2>
                <p className="text-center mb-6">{t("contact.subtitle")}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            {t("contact.form.name_label")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            {t("contact.form.email_label")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            {t("contact.form.message_label")}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-400 hover:bg-blue-500 text-gray-900 font-medium py-2 rounded-md transition duration-200"
                    >
                        {t("contact.form.submit_button")}
                    </button>
                </form>

                {/* Display Error Message */}
                {error && <p className="text-red-400 text-center mt-4">{error}</p>}

                {/* Display Success Message */}
                {successMessage && (
                    <p className="text-green-400 text-center mt-4">{successMessage}</p>
                )}
            </div>

            {/* Always show the map */}
            {formData.latitude && formData.longitude && (
                <div className="w-full lg:w-1/2 h-96 lg:h-auto flex-grow lg:pl-4">
                    <MapContainer
                        center={[formData.latitude || 0, formData.longitude || 0]}
                        zoom={13}
                        style={{ height: "100%", width: "100%" }}
                        className="mx-auto"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            noCache={true}
                        />
                        <Marker position={[formData.latitude, formData.longitude]} icon={customIcon}>
                            <Popup>{t("contact.popup_message")}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
