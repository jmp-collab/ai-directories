import { getScore, scoreLabel, SCORE_MAX } from '../../lib/score'

const PARTS = [
    ['dr', 'Domain Rating'],
    ['traffic', 'Traffic'],
    ['price', 'Preis'],
    ['submission', 'Einreichung'],
]

export default function ScoreBar({ directory }) {
    const { total, parts } = getScore(directory)
    return (
        <div className="scorebox">
            <p className="scorebox-total">
                <span className="score-pill score-pill-big" style={{ '--score': total }}>
                    {total}
                </span>
                <span>
                    Jean-Score von 100: <strong>{scoreLabel(total)}</strong>
                </span>
            </p>
            <dl className="scorebox-parts">
                {PARTS.map(([key, label]) => (
                    <div key={key}>
                        <dt>{label}</dt>
                        <dd>
                            <span className="part-bar">
                                <span style={{ width: `${(parts[key] / SCORE_MAX[key]) * 100}%` }} />
                            </span>
                            {parts[key]} / {SCORE_MAX[key]}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
