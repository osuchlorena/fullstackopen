import StatisticLine from "./StatisticLine "

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
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average} />
        </>
    )
}