'use client'
import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function hvac() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.8.2:8081/hvac")
      .then(res => res.json())
      .then(data => setData(data)) // setting data to the state
      .catch(err => console.log("err"));
  }, []);
  return (
    <main>

<section
  className="overflow-hidden bg-[url(https://goldpro.waitlink.online/img/pro1.png)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-5xl font-bold text-white sm:text-7xl">التكييف المركزي</h2>
      <Link href={'/home'}><h2 className="text-5xl font-bold text-white sm:text-2xl">عودة</h2></Link>
    </div>
  </div>
</section>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 gap-1 md:gap-1 sm:gap-4">
      {data.map((d, i) => (
        <div key={i}>
        <Link href="#" className="group relative block overflow-hidden p-4 sm:p-6">
          <button
            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
          >
          </button>

          <img
            src={d.image}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative border border-gray-100 bg-white p-6">
            <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> جديد </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">{d.name}</h3>

            <p className="mt-1.5 text-sm text-gray-700">{d.price} د.ك</p>
          </div>
        </Link>      
        </div>
      ))}
      </div>

    </main>
  );
}
