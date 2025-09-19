const leaderboardData = [
    { 
        rank: 1, 
        name: 'Moad', 
        score: 30, 
        eventsPlayed: 1,
        medals: { gold: 1, silver: 0, bronze: 0 },
        bestEvent: '1st axis event'
    },
    { 
        rank: 2, 
        name: 'Mrvoid', 
        score: 20, 
        eventsPlayed: 1,
        medals: { gold: 0, silver: 1, bronze: 0 },
        bestEvent: '1st axis event'
    },
    { 
        rank: 3, 
        name: 'Zachary', 
        score: 15, 
        eventsPlayed: 1,
        medals: { gold: 0, silver: 0, bronze: 1 },
        bestEvent: '1st axis event'
    },
    { 
        rank: 4, 
        name: 'Useless', 
        score: 10, 
        eventsPlayed: 1,
        medals: { gold: 0, silver: 0, bronze: 0 },
        bestEvent: '1st axis event'
    },
    { 
        rank: 5, 
        name: 'UNKNOWN', 
        score: 0, 
        eventsPlayed: 0,
        medals: { gold: 0, silver: 0, bronze: 0 },
        bestEvent: 'None'
    },
    { 
        rank: 6, 
        name: 'UNKNOWN', 
        score: 0, 
        eventsPlayed: 0,
        medals: { gold: 0, silver: 0, bronze: 0 },
        bestEvent: 'None'
    },
    { 
        rank: 7, 
        name: 'UNKNOWN', 
        score: 0, 
        eventsPlayed: 0,
        medals: { gold: 0, silver: 0, bronze: 0 },
        bestEvent: 'None'
    },
    { 
        rank: 8, 
        name: 'UNKNOWN', 
        score: 0, 
        eventsPlayed: 0,
        medals: { gold: 0, silver: 0, bronze: 0 },
        bestEvent: 'None'
    },
    { 
        rank: 9, 
        name: 'UNKNOWN', 
        score: 0, 
        eventsPlayed: 0,
        medals: { gold: 0, silver: 0, bronze: 0 },
        bestEvent: 'None'
    },
    { 
        rank: 10, 
        name: 'UNKNOWN', 
        score: 0, 
        eventsPlayed: 0,
        medals: { gold: 0, silver: 0, bronze: 0 },
        bestEvent: 'None'
    },
];

function generateLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    if (!container) return;

    leaderboardData.forEach(player => {
        const entry = document.createElement('div');
        entry.classList.add('leaderboard-entry');
        entry.style.cursor = 'pointer';
        
        // Add click event to show player stats
        entry.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event bubbling
            showPlayerStats(player);
        });

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

function showPlayerStats(player) {
    // Populate modal with player data
    document.getElementById('modal-player-name').textContent = player.name;
    document.getElementById('modal-player-rank').textContent = player.rank;
    document.getElementById('modal-player-score').textContent = player.score;
    document.getElementById('modal-player-events').textContent = player.eventsPlayed;
    
    // Populate medals
    document.getElementById('modal-gold-medals').textContent = player.medals.gold;
    document.getElementById('modal-silver-medals').textContent = player.medals.silver;
    document.getElementById('modal-bronze-medals').textContent = player.medals.bronze;
    
    // Populate best event
    document.getElementById('modal-best-event').textContent = player.bestEvent;
    
    // Show the modal
    const modal = document.getElementById('player-modal');
    modal.style.display = 'block';
    modal.setAttribute('data-opening', 'true');
    
    // Small delay to ensure the modal is displayed before animating
    requestAnimationFrame(() => {
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
        
        // Remove the opening flag after animation
        setTimeout(() => {
            modal.removeAttribute('data-opening');
        }, 100);
    });
}

// Modal close functionality
document.addEventListener('DOMContentLoaded', function() {
    generateLeaderboard();
    
    const modal = document.getElementById('player-modal');
    const closeBtn = document.querySelector('.close');
    
    // Close modal when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            closeModal();
        });
    }
    
    // Close modal when clicking outside of it (only on the backdrop)
    modal.addEventListener('click', function(event) {
        // Don't close if modal is still opening
        if (modal.hasAttribute('data-opening')) {
            return;
        }
        
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Prevent modal from closing when clicking inside the modal content
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

function closeModal() {
    const modal = document.getElementById('player-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add closing animation
    modalContent.style.transform = 'scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        // Reset for next time
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 200);
}

