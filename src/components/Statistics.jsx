export default function Statistics({ good, neutral, bad }) {
    const total = bad + good + neutral
    const average = (bad + good + neutral) / 3
    if (total == 0) {
        return (
            <>
            <h1>Statistics</h1>
            <h3>No feedback given</h3>
            </>
        )
    }
    return (
        <>
            <h1>Statistics</h1>
            <h3>Good {good} </h3>
            <h3>Neutral {neutral} </h3>
            <h3>Bad {bad} </h3>
            <h4>Total {total}</h4>
            <h4>Average {average}</h4>
        </>
    )
}