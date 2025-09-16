const leaderboardData = [
    { rank: 1, name: 'no event yet', score: 10000 },
    { rank: 2, name: 'no event yet', score: 9500 },
    { rank: 3, name: 'no event yet', score: 9000 },
    { rank: 4, name: 'no event yet', score: 8500 },
    { rank: 5, name: 'no event yet', score: 8000 },
    { rank: 6, name: 'no event yet', score: 7500 },
    { rank: 7, name: 'no event yet', score: 7000 },
    { rank: 8, name: 'no event yet', score: 6500 },
    { rank: 9, name: 'no event yet', score: 6000 },
    { rank: 10, name: 'no event yet', score: 5500 },
];

function generateLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    if (!container) return;

    leaderboardData.forEach(player => {
        const entry = document.createElement('div');
        entry.classList.add('leaderboard-entry');

        const rank = document.createElement('span');
        rank.classList.add('rank');
        rank.textContent = player.rank;

        const name = document.createElement('span');
        name.classList.add('name');
        name.textContent = player.name;

        const score = document.createElement('span');
        score.classList.add('score');
        score.textContent = player.score;

        entry.appendChild(rank);
        entry.appendChild(name);
        entry.appendChild(score);

        container.appendChild(entry);
    });
}

document.addEventListener('DOMContentLoaded', generateLeaderboard);