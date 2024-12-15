
const teams = {
    "Manchester United": { PrimerLeagueTrophies: 20, FACupTrophies: 13, ChampionsLeagueTrophies: 3 },
    "Liverpool": { PrimerLeagueTrophies: 19, FACupTrophies: 8, ChampionsLeagueTrophies: 6 },
    "Chelsea": { PrimerLeagueTrophies: 6, FACupTrophies: 8, ChampionsLeagueTrophies: 2 },
    "Manchester City": { PrimerLeagueTrophies: 10, FACupTrophies: 7, ChampionsLeagueTrophies: 1 },
    "Arsenal": { PrimerLeagueTrophies: 13, FACupTrophies: 14, ChampionsLeagueTrophies: 0 },
    "Tottenham Hotspur": { PrimerLeagueTrophies: 2, FACupTrophies: 8, ChampionsLeagueTrophies: 0 },
};

const teamList = document.querySelector('.team-list');
const teamStats = document.getElementById('teamStats');
const teamName = document.getElementById('teamName');
const teamPrimerLeagueTrophies = document.getElementById('teamPrimerLeagueTrophies');
const teamFACupTrophies = document.getElementById('teamFACupTrophies');
const teamChampionsLeagueTrophies = document.getElementById('teamChampionsLeagueTrophies');

teamList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedTeam = e.target.dataset.team;
        const stats = teams[selectedTeam];

        teamName.textContent = selectedTeam;
        teamPrimerLeagueTrophies.textContent = stats.PrimerLeagueTrophies;
        teamFACupTrophies.textContent = stats.FACupTrophies;
        teamChampionsLeagueTrophies.textContent = stats.ChampionsLeagueTrophies;

        teamStats.style.display = 'block';
    }
});