'use client'
import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

<section
  className="overflow-hidden bg-[url(https://res.cloudinary.com/dznou6fed/image/upload/v1720358644/idoigmqj4k9ba6kh7d7e.jpg)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-5xl font-bold text-white sm:text-7xl">اجهزة تعطير الجو</h2>
      <Link href={'/home'}><h2 className="text-5xl font-bold text-white sm:text-2xl">عودة</h2></Link>
    </div>
  </div>
</section>

    </main>
  );
}
