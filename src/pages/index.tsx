"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import products from "@/data/product.json";
import team from "@/data/team.json";
import { motion } from "framer-motion";
import { useState } from "react";
import { Metadata } from "next";

// Animation variants
const fadeInUp : any = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeInLeft : any = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const scaleIn : any= {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const stagger : any = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navStagger : any = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const heroVariants : any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const heroTitle : any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const heroSubtitle : any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const metadata: Metadata = {
  title: 'PT. Wartiwan Kreatif Nusantara',
  description: 'PT. Wartiwan Kreatif Nusantara',
}

export default function Home() {
    const [showLess, setShowLess] = useState(true);

    function showLessText(text: string, showLess: boolean) {
        const textLength = 550;

        if (!showLess) return text;

        return text.substring(0, textLength);
    }

    return (
        <>
            <div className="min-h-screen bg-white" id="Home">
                {/* Navigation */}
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 backdrop-blur-sm bg-white/95"
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                className="text-xl font-bold text-gray-900"
                            >
                                <Image
                                    src="/logo.jpg"
                                    width={70}
                                    height={70}
                                    alt="Manufacturing facility"
                                    className="object-cover opacity-70"
                                />
                            </motion.div>
                            <motion.div
                                variants={navStagger}
                                initial="hidden"
                                animate="visible"
                                className="hidden md:flex space-x-6"
                            >
                                {[
                                    {
                                        title: "Home",
                                        id: "Home",
                                    },
                                    {
                                        title: "About",
                                        id: "About",
                                    },
                                    {
                                        title: "Our Strength",
                                        id: "Our Strength",
                                    },
                                    {
                                        title: "Our Product",
                                        id: "Our Product",
                                    },
                                    {
                                        title: "Contact",
                                        id: "Contact",
                                    },
                                ].map((item) => (
                                    <motion.a
                                        key={item?.id}
                                        variants={fadeInUp}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 },
                                        }}
                                        href={"#" + item?.id}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element =
                                                document.getElementById(
                                                    item?.id
                                                );
                                            if (element) {
                                                // Offset untuk navbar sticky (sesuaikan dengan tinggi navbar Anda)
                                                const offsetTop =
                                                    element.offsetTop - 80;

                                                window.scrollTo({
                                                    top: offsetTop,
                                                    behavior: "smooth",
                                                });
                                            }
                                        }}
                                        className="hover:text-blue-700 text-gray-700 transition-colors duration-300 relative group cursor-pointer"
                                    >
                                        {item?.title}
                                        <motion.span
                                            className="absolute -bottom-1 left-0 h-0.5 bg-blue-600"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.nav>

                {/* Hero Section */}
                <section className="relative h-[500px] bg-gray-900 overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1723627729299-309a9d3c8a89?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Manufacturing facility"
                            fill
                            className="object-cover opacity-70"
                        />
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/45">
                        <motion.div
                            variants={heroVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center text-white"
                        >
                            <motion.h1
                                variants={heroTitle}
                                className="text-4xl md:text-6xl font-bold mb-4"
                            >
                                KAMI MEMBUAT
                                <br />
                                PRODUK YANG
                                <br />
                                BERKUALITAS
                            </motion.h1>
                            <motion.p
                                variants={heroSubtitle}
                                className="text-lg md:text-xl mb-8"
                            >
                                Quality Manufacturing Solutions
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Company Info Section */}
                <section className="py-16 px-4" id="About">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInLeft}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    PT. Wartiwan Kreatif Nusantara
                                </h2>
                                <p className="text-gray-600 mb-6 text-justify leading-relaxed">
                                    {showLessText(
                                        `Kami lahir dari semangat seorang penjahit asal Tasikmalaya yang membangun segalanya dari nol dengan ketekunan dan integritas. Berawal dari ruang kecil dengan satu mesin jahit, kini kami tumbuh menjadi perusahaan manufaktur tas yang menggabungkan nilai keluarga, profesionalisme, dan warisan kerja keras dalam setiap produk.
Dengan lebih dari 20 tenaga kerja terampil dan sistem produksi terintegrasi, kami mampu memproduksi antara 10.000 hingga 15.000 unit tas per bulan. Kapasitas ini menjadi cerminan dari efisiensi kerja, pengendalian mutu yang ketat, serta komitmen kami untuk memenuhi kebutuhan mitra bisnis secara konsisten, tepat waktu, dan dalam skala besar tanpa mengorbankan kualitas maupun nilai estetika produk.
Kami memproduksi tas multifungsi berkualitas tinggi untuk kebutuhan harian, perjalanan, hingga kegiatan khusus, dan terus berinovasi melalui penerapan desain serta teknologi ramah lingkungan. Dengan pemilihan bahan berkelanjutan dan proses produksi yang bertanggung jawab, kami berkomitmen menciptakan produk yang tidak hanya kuat dan fungsional, tetapi juga selaras dengan semangat keberlanjutan.
Setiap jahitan bukan hanya hasil produksi, tetapi cerminan visi kami: menghadirkan karya yang bernilai, berdampak positif bagi lingkungan, dan mewarisi semangat Work hard, Walk forward, and Win with integrity. Dari Tasikmalaya untuk dunia.
`,
                                        showLess
                                    )}
                                    <span
                                        onClick={() => setShowLess(!showLess)}
                                        className="text-blue-700 cursor-pointer"
                                    >
                                        {showLess
                                            ? "... Show More"
                                            : " Show Less"}
                                    </span>
                                </p>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={stagger}
                                className="grid grid-cols-2 gap-4"
                            >
                                {[
                                    {
                                        number: "15+",
                                        text: "Years Experience",
                                        color: "blue",
                                    },
                                    {
                                        number: "500+",
                                        text: "Products Made",
                                        color: "green",
                                    },
                                    {
                                        number: "10+",
                                        text: "Partner",
                                        color: "orange",
                                    },
                                    {
                                        number: "100%",
                                        text: "Quality Assured",
                                        color: "purple",
                                    },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={scaleIn}
                                        whileHover={{
                                            y: -8,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        <Card className="hover:shadow-lg transition-shadow duration-300">
                                            <CardContent className="p-6 text-center">
                                                <motion.div
                                                    className={`text-3xl font-bold text-${stat.color}-600 mb-2`}
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: index * 0.1,
                                                        type: "spring",
                                                        stiffness: 200,
                                                    }}
                                                >
                                                    {stat.number}
                                                </motion.div>
                                                <div className="text-gray-600">
                                                    {stat.text}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-16 px-4 bg-gray-50" id="Our Strength">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl font-bold text-center text-gray-900 mb-12"
                        >
                            Our Strength
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {[
                                {
                                    image: "https://images.unsplash.com/photo-1741183393418-d2dc85b903e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    title: "Advanced Manufacturing",
                                    description:
                                        "Our modern facility uses cutting-edge technology to ensure precision and quality in every product.",
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1676888010775-06d8468567af?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    title: "Quality Control",
                                    description:
                                        "Rigorous testing and inspection processes guarantee that every product meets our high standards.",
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                    title: "Global Reach",
                                    description:
                                        "We export our products worldwide, serving customers across multiple continents.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{
                                        y: -12,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <Card className="h-full !py-0 hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
                                        <CardContent className="p-0 h-full">
                                            <motion.div
                                                className="overflow-hidden"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={400}
                                                    height={200}
                                                    className="w-full h-48 object-cover"
                                                />
                                            </motion.div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-16 px-4" id="Our Product">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl font-bold text-center text-gray-900 mb-12"
                        >
                            Our Products
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                        >
                            {products.map((product) => (
                                <motion.div
                                    key={product.id}
                                    variants={scaleIn}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <Card className="!py-0 !pb-6 !pt-3 hover:shadow-lg transition-shadow duration-300 group">
                                        <CardContent>
                                            <motion.div
                                                className="overflow-hidden rounded mb-3"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Image
                                                    src={
                                                        product.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={product.name}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-32 object-cover bg-none"
                                                />
                                            </motion.div>
                                            <h3 className="text-sm font-medium text-gray-900 text-center">
                                                {product.name}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl font-bold text-center text-gray-900 mb-12"
                        >
                            Our Team
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={stagger}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {team.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={fadeInUp}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <Card className="text-center hover:shadow-lg transition-shadow duration-300 group">
                                        <CardContent className="p-4">
                                            <motion.div
                                                className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-3"
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 5,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Image
                                                    src={
                                                        member.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={member.name}
                                                    width={150}
                                                    height={150}
                                                    className="object-top w-24 h-24 object-cover"
                                                />
                                            </motion.div>
                                            <h3 className="text-sm font-medium text-gray-900">
                                                {member.name}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer
                    className="bg-gray-900 text-white py-12 px-4"
                    id="Contact"
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={stagger}
                            className="gap-8 flex md:flex-row flex-col justify-between"
                        >
                            <motion.div variants={fadeInUp}>
                                <h3 className="text-lg font-semibold mb-4">
                                    PT. Wartiwan Kreatif Nusantara
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Leading manufacturer of quality bags and
                                    accessories for global markets.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <h4 className="font-semibold mb-4">Contact</h4>
                                <div className="text-sm text-gray-400 space-y-2">
                                    <motion.p
                                        className="hover:text-white transition-colors duration-300 cursor-pointer"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Email:
                                        PT.Wartiwankreatifnusantara@gmail.com
                                    </motion.p>
                                    <motion.p
                                        className="hover:text-white transition-colors duration-300 cursor-pointer"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Phone: +6281220709584
                                    </motion.p>
                                    <motion.p
                                        className="hover:text-white transition-colors duration-300 cursor-pointer"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Address: Mekarjati Dalam 2, RT 03 RW 05,
                                        Kec. Cibiru, Bandung, Jawa Barat, 40615
                                    </motion.p>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
                        >
                            <p>
                                &copy; 2025 PT. Wartiwan Kreatif Nusantara. All
                                rights reserved.
                            </p>
                        </motion.div>
                    </div>
                </footer>
            </div>
        </>
    );
}
