const projects = [
    { title: 'AI Salary Prediction', tech: 'React, ML, Node' },
    { title: 'Chatbot App', tech: 'React, OpenAI API' },
]


export default function Projects() {
    return (
        <section id="projects" className="px-10 py-20">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <div key={p.title} className="bg-gray-900 p-6 rounded">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.tech}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}