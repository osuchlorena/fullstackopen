import Part from "./Part ";

export default function Content({ parts}) {
    return (
        <>
            {
                parts.map(part => (
                    <Part part={part.name} exercise={part.exercises} />
                ))
            }
        </>
    )
}