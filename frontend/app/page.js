'use client'
import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <main>
      <section className="overflow-hidden bg-[url(https://goldpro.waitlink.online/img/header.png)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/60 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center lg:flex">
            <div>
              <div className="flex justify-center items-center">
                <Image src={'/logo3.png'} width={600} height={500} alt="Logo" />
              </div>

              <br />
              <div className="mt-2 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full text-2xl rounded bg-orange-400 px-12 py-3 text-black shadow hover:bg-orange-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="/home"
                >
                  ابدأ الان
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center pl-28 mt-24">
              <Image src={'/qr.png'} width={400} height={400} alt="QR" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
