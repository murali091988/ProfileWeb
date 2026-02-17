const skills = ['React', 'Node.js', 'Flutter', 'AI/ML', 'AWS', 'Docker']


export default function Skills() {
    return (
        <section id="skills" className="px-10 py-20">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-4">
                {skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-gray-800 rounded">{skill}</span>
                ))}
            </div>
        </section>
    )
}