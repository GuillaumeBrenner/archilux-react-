import { useState, type ChangeEvent, type FormEvent } from "react";
import "../../App.css";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL ?? "";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const emptyForm: ContactData = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [data, setData] = useState<ContactData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API_URL}/send-mail`, data);
      toast.success(t("success_alert"));
      setData(emptyForm);
    } catch (error) {
      console.error(error);
      toast.error(t("error_alert"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="form-wrapper">
            <div className="contact-info" data-aos="fade-down">
              <h3 className="title">{t("lets_connect")}</h3>
              <div className="info">
                <p className="text">{t("adress_below")} :</p>
                <div className="info-wrapper">
                  <div className="information">
                    <img src="/images/endroit.png" className="icon" alt="" />
                    <p>Angle rue 61 Hédzranawoé, Boulevard Haho</p>
                  </div>
                  <div className="information">
                    <img src="/images/mail.png" className="icon" alt="" />
                    <p>grouparchilux@gmail.com</p>
                  </div>
                  <div className="information">
                    <img src="/images/support2.png" className="icon" alt="" />
                    <p>+228 ( 91 85 12 80 / 99 51 32 40 )</p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <p>{t("networks")} :</p>
                <div className="social-icons">
                  <div className="social-name">
                    <i className="fab fa-facebook-f"></i>
                    <p>Facebook</p>
                  </div>
                  <div className="social-name">
                    <i className="fab fa-twitter"></i>
                    <p>Twitter</p>
                  </div>
                  <div className="social-name">
                    <i className="fab fa-instagram"></i>
                    <p>Instagram</p>
                  </div>
                  <div className="social-name">
                    <i className="fab fa-linkedin-in"></i>
                    <p>Linkedin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form" data-aos="fade-up">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <h3 className="title">{t("contact_us")}</h3>
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("name_input")}
                    className="input"
                    onChange={handleChange}
                    value={data.name}
                    required
                  />
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input"
                    onChange={handleChange}
                    value={data.email}
                    required
                  />
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    name="phone"
                    placeholder={t("phone_input")}
                    className="input"
                    onChange={handleChange}
                    value={data.phone}
                  />
                </div>
                <div className="input-container textarea">
                  <textarea
                    maxLength={300}
                    name="message"
                    placeholder="Message"
                    className="input"
                    onChange={handleChange}
                    value={data.message}
                    required
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value={t("send_btn")}
                  className="btn-contact"
                  disabled={data.name.length < 1 || submitting}
                />
                <div className="notification Toastify__toast-container">
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section" data-aos="zoom-in">
        <iframe
          title="map"
          width="900"
          height="350"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6662522345846!2d1.2399546291725134!3d6.175581699720572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e38b32aabb01%3A0xa03e60e7eb0a1a48!2sJovana%20Beauty!5e0!3m2!1sfr!2stg!4v1651662281031!5m2!1sfr!2stg"
        />
      </section>

      <Footer />
    </>
  );
}
