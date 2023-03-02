
enum Seasons {
    winter,
    spring,
    summer,
    autumn,
}

function seasonsGreetings(season: Seasons) {
    if (season === Seasons.winter) return "⛄️";
    if (season === Seasons.spring) return "🐰";
    if (season === Seasons.summer) return "🏖";
    if (season === Seasons.autumn) return "🍂";
}

seasonsGreetings(Seasons.winter); // ⛄️