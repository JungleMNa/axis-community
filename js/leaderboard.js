const leaderboardData = [
    { rank: 1, name: 'Moad', score: 30 },
    { rank: 2, name: 'Mrvoid', score: 20 },
    { rank: 3, name: 'Zachary', score: 15 },
    { rank: 4, name: 'Useless', score: 10 },
    { rank: 5, name: 'UNKNOWN', score: 0 },
    { rank: 6, name: 'UNKNOWN', score: 0 },
    { rank: 7, name: 'UNKNOWN', score: 0 },
    { rank: 8, name: 'UNKNOWN', score: 0 },
    { rank: 9, name: 'UNKNOWN', score: 0 },
    { rank: 10, name: 'UNKNOWN', score: 0 },
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

