export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur z-50 px-8 py-4 flex justify-between">
            <h1 className="text-xl font-bold">Murali.dev</h1>
            <div className="space-x-6 text-sm">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}