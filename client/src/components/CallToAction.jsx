import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Ingin menjadi penulis di web kami</h2>
        <p className="text-gray-500 my-2">
          Klik tombol ini untuk menghubungi pemilik web ini
        </p>
        <Button
          gradientDuoTone={"purpleToPink"}
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://wa.me/6281934572861?text=assalamualaikum liqooo's blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayo Gabung jadi penulis di Liqooo's Blog
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1 flex justify-center">
        <img
          src="https://responsive-portofolio-alim.vercel.app/assets/img/profil-1.png"
          style={{
            width: "200px",
            width: "220px",
            justifySelf: "center",
            maskImage:
              "linear-gradient(to bottom, hsla(230, 40%, 16%) 60%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
