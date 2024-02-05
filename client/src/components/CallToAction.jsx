import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1">
        <h2 className="text-2xl">Ingin fokus belajar Al Qur'an ?</h2>
        <p className="text-gray-500 my-2">
          Klik Gerakan belajar membaca Al Qur'an
        </p>
        <Button
          gradientDuoTone={"purpleToPink"}
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayo Gabung jadi penulis di web kami
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://asset-2.tstatic.net/bali/foto/bank/images/Sambut-Puasa-Ramadhan-2024-Bulan-Maret-Berikut-Ini-Adalah-Kumpulan-Quotes-Ramadhan-1445-H.jpg" />
      </div>
    </div>
  );
}
