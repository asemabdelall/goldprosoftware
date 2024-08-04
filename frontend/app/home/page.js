'use client'
import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>

<section
  className="overflow-hidden bg-[url(https://goldpro.waitlink.online/img/header.png)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-5xl font-bold text-white sm:text-7xl">خدماتنا</h2>
      <Link href={'/'}><h2 className="text-5xl font-bold text-white sm:text-2xl">عودة</h2></Link>
    </div>
  </div>
</section>
<div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 p-5">
        <div className="h-32 rounded-lg bg-gray-200">
            <Link href="/category/fire" className="relative block rounded-tr-3xl border border-gray-100">
            <span
            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
        >
            جديد
        </span>

        <img
            src="https://img1.exportersindia.com/product_images/bc-full/2018/9/5898982/fire-fighting-system-1537526374-4325584.jpeg"
            alt=""
            className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
            <strong className="text-3xl font-medium text-gray-900"> مكافحة الحريق</strong>

            <span
            className="mt-4 block rounded-md bg-orange-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-orange-500"
            >
            اعرف اكثر
            </span>
        </div>
            </Link>
        </div>
        <div className="h-32 rounded-lg bg-gray-200">
            <Link href="/category/hvac" className="relative block rounded-tr-3xl border border-gray-100">
            <span
            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
        >
            جديد
        </span>

        <img
            src="https://goldpro.waitlink.online/img/pro1.png"
            alt=""
            className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
            <strong className="text-3xl font-medium text-gray-900"> التكييف المركزي</strong>

            <span
            className="mt-4 block rounded-md bg-orange-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-orange-500"
            >
            اعرف اكثر
            </span>
        </div>
            </Link>
        </div>
        
        <div className="h-32 rounded-lg bg-gray-200">
        <Link href="/category/scents" className="relative block rounded-tr-3xl border border-gray-100">
        <span
            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
        >
            جديد
        </span>

        <img
            src="https://res.cloudinary.com/dznou6fed/image/upload/v1720358644/idoigmqj4k9ba6kh7d7e.jpg"
            alt=""
            className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
            <strong className="text-3xl font-medium text-gray-900"> اجهزة تعطير الجو </strong>

            <span
            className="mt-4 block rounded-md bg-orange-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-orange-500"
            >
            اعرف اكثر
            </span>
        </div>
            </Link>
        </div>


    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<div className="grid grid-cols-2 gap-4 pt-60 lg:grid-cols-3 lg:gap-8 p-5">
        <div className="h-32 rounded-lg bg-gray-200">
            <Link href="/category/fire" className="relative block rounded-tr-3xl border border-gray-100">
            <span
            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
        >
            جديد
        </span>

        <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8LdGRP5rnHanw4B7JjnxZR09-Tj_FS9dxpaRFPQ_Apr-d3TR1Xged45jsZocOrtxy4YJzBJx__c4eYlt1P7PgeVIyrgktM_vOCNKzDEYyULUjQY4DY5zr7SQNNsP5KwiHVa4aS-snsrkw/s1600/%25D8%25A3%25D8%25B9%25D9%2585%25D8%25A7%25D9%2584+%25D8%25A7%25D9%2584%25D9%2583%25D9%2587%25D8%25B1%25D8%25A8%25D8%25A7%25D8%25A1.jpg"
            alt=""
            className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
            <strong className="text-3xl font-medium text-gray-900"> اعمال الكهرباء</strong>

            <span
            className="mt-4 block rounded-md bg-orange-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-orange-500"
            >
            اعرف اكثر
            </span>
        </div>
            </Link>
        </div>
        <div className="h-32 rounded-lg bg-gray-200">
            <Link href="/category/fire" className="relative block rounded-tr-3xl border border-gray-100">
            <span
            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
        >
            جديد
        </span>

        <img
            src="https://mepcokuwait.com/wp-content/uploads/2019/03/PLUMBING-SANITARY-WORK.jpg"
            alt=""
            className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
            <strong className="text-3xl font-medium text-gray-900"> اعمال الصحي </strong>

            <span
            className="mt-4 block rounded-md bg-orange-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-orange-500"
            >
            اعرف اكثر
            </span>
        </div>
            </Link>
        </div>
        
        <div className="h-32 rounded-lg bg-gray-200">
        <Link href="/category/shutter" className="relative block rounded-tr-3xl border border-gray-100">
        <span
            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
        >
            جديد
        </span>

        <img
            src="https://jma-aluminum.asia/2019/products/custom-aluminum-shutter_02.jpg"
            alt=""
            className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4 text-center">
            <strong className="text-3xl font-medium text-gray-900"> اعمال الشتر و الالمونيوم </strong>

            <span
            className="mt-4 block rounded-md bg-orange-400 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-orange-500"
            >
            اعرف اكثر
            </span>
        </div>
            </Link>
        </div>
    </div>

    </main>
  );
}
