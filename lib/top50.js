// Die 50 besten Verzeichnisse nach Jean-Score: ohne gesperrte Einreichung und ohne zweifelhaften DR.
import { getDirectories } from './data'
import { getScore } from './score'
import { getCheck, hasStatusIssue } from './checks'
import { isDrSuspect } from './fresh'

export const getTop50 = () =>
    getDirectories()
        .filter((d) => !hasStatusIssue(d.slug) && !isDrSuspect(d))
        .map((d) => ({ ...d, score: getScore(d).total, check: getCheck(d.slug) }))
        .sort((a, b) => b.score - a.score || b.domain_rating - a.domain_rating)
        .slice(0, 50)
