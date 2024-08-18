import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold my-7 text-center">
            About Liqoos's Blog
          </h1>
          <div className="flex flex-col gap-6 text-md text-gray-500">
            <p>
              Liqooo's Blog adalah sebuah platform yang didedikasikan untuk
              menyajikan artikel-artikel Islami yang mendalam dan bermanfaat.
              Web ini dibuat oleh{" "}
              <span className="font-bold ">
                <a
                  href="https://responsive-portofolio-alim.vercel.app/"
                  target="_blank"
                >
                  Alim Assidik
                </a>
              </span>{" "}
              dan berfokus pada penyampaian ilmu yang murni dan autentik,
              berlandaskan pada Al-Quran dan Sunnah dengan mengikuti pemahaman
              para Salafus Salih. Setiap artikel yang dipublikasikan di blog ini
              dirancang untuk membantu pembaca dalam memperdalam pemahaman
              mereka tentang Islam yang benar dan lurus.
            </p>
            <p>
              Melalui Liqooo's Blog, tujuan utamanya adalah untuk memberikan
              wawasan yang jelas dan praktis tentang berbagai cabang ilmu Islam,
              mulai dari aqidah, fiqih, hingga adab dan akhlak. Semua konten
              yang disajikan disusun dengan teliti dan penuh kehati-hatian, agar
              setiap informasi yang diterima pembaca benar-benar sesuai dengan
              ajaran Islam yang asli, sebagaimana yang dipahami oleh generasi
              pertama umat Islam.
            </p>
            <p>
              Dengan visi untuk menjadi sumber ilmu yang dapat diandalkan,
              Liqooo's Blog terus berusaha menghadirkan artikel-artikel yang
              relevan dengan kebutuhan umat Islam masa kini. Pembaca diajak
              untuk tidak hanya membaca, tetapi juga merenungkan dan mengamalkan
              ajaran-ajaran yang disampaikan, demi mencapai kehidupan yang lebih
              baik dan diridhai oleh Allah SWT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
