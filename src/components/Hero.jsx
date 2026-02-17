import { motion } from 'framer-motion'


export default function Hero() {
    return (
        <section className="h-screen flex items-center justify-center text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-5xl font-bold">Hi, I'm Murali 👋</h1>
                <p className="mt-4 text-xl text-gray-400">Full Stack & AI Developer</p>
                <div className="mt-6 space-x-4">
                    <a className="px-6 py-3 bg-blue-600 rounded">View Projects</a>
                    <a className="px-6 py-3 border rounded">Download CV</a>
                </div>
            </motion.div>
        </section>
    )
}