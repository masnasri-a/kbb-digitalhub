"use client";
import axios from "axios";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Swal from "sweetalert2";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [desa, setDesa] = useState("");
  const [alamat, setAlamat] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = function (e: any) {
    setIsLoading(true);
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      setNotification(
        "Execute recaptcha not available yet likely meaning key not recaptcha key not set",
      );
      return;
    }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        submitEnquiryForm(gReCaptchaToken);
        setIsLoading(false);
      });  
  };

  const submitEnquiryForm = (gReCaptchaToken: string) => {
    async function goAsync() {
      console.log("gReCaptchaToken", "hehe mau ngapain hayo");
    }
    goAsync().then(() => {
      axios
        .post("/api/contact", {
          name,
          email,
          pesan: message,
          kecamatan,
          desa,
          alamat,
          phone: phoneNumber,
          gReCaptchaToken,
        })
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Pesan berhasil dikirim",
            showConfirmButton: false,
            timer: 1500,
          });
          setAlamat("");
          setEmail("");
          setMessage("");
          setName("");
          setPhoneNumber("");
          setKecamatan("");
          setDesa("");
          setTimeout(() => {
            window.location.href = "/";
          }, 2500);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Ada gangguaan saat mengirim pesan",
            showConfirmButton: false,
            timer: 1500,
          });
          setAlamat("");
          setEmail("");
          setMessage("");
          setName("");
          setPhoneNumber("");
          setKecamatan("");
          setDesa("");

          setTimeout(() => {
            window.location.href = "/";
          }, 2500);
        });
    }); // suppress typescript error
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Pendaftaran
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Silahkan isi form pendaftaran berikut untuk mendaftar di Bandung
                Barat Digital Hub
              </p>
              <form onSubmit={handleSubmitForm}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama Anda"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="number"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nomor Telepon
                      </label>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="number"
                        placeholder="Masukkan nomor telepon Anda"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email Anda
                      </label>
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Masukkan email Anda"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Kecamatan
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setKecamatan(e.target.value)}
                        placeholder="Masukkan kecamatan Anda"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="text"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Desa
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setDesa(e.target.value)}
                        placeholder="Masukkan desa Anda"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="alamat"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Alamat Lengkap
                      </label>
                      <textarea
                        name="alamat"
                        onChange={(e) => setAlamat(e.target.value)}
                        rows={5}
                        placeholder="Masukkan alamat lengkap Anda"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Pesan
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Masukkan pesan Anda"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {isLoading ? "Loading..." : "Kirim"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
