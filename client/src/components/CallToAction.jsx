import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
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
      <div className="p-7 flex-1 flex justify-center">
        <img src="https://media.licdn.com/dms/image/C5603AQHCkcdF5ilzJw/profile-displayphoto-shrink_200_200/0/1595170055454?e=2147483647&v=beta&t=wU-8Ed3X8_nkrSiPhfOuFycEMPSXxhUKOKf3yhl6_B8" />
      </div>
    </div>
  );
}
