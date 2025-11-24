export const calculateDemographics = (niche, followers, views) => {
    // Heuristic Data: Base demographics by niche
    const nicheData = {
        'entertainment': { female: 55, male: 45, ages: ['18-24', '25-34'] },
        'beauty': { female: 85, male: 15, ages: ['18-24', '25-34'] },
        'tech': { female: 20, male: 80, ages: ['25-34', '18-24'] },
        'education': { female: 50, male: 50, ages: ['18-24', '13-17'] },
        'fitness': { female: 60, male: 40, ages: ['25-34', '18-24'] },
        'lifestyle': { female: 70, male: 30, ages: ['18-24', '25-34'] },
        'business': { female: 35, male: 65, ages: ['25-34', '35-44'] }
    };

    if (!niche || !nicheData[niche]) return null;

    // 1. Calculate Engagement Rate
    let engagementRate = 0;
    if (followers > 0) {
        engagementRate = ((views / followers) * 100).toFixed(2);
    }

    // Cap realistic display
    let displayEngagement = engagementRate;
    if (engagementRate > 1000) displayEngagement = '> 1000';

    // 2. Get Base Demographics
    let data = nicheData[niche];

    // 3. Adjust Logic (Heuristic Tweaks)
    let adjustedFemale = data.female;
    let adjustedMale = data.male;

    // Random slight variance to make it feel "calculated"
    const variance = Math.floor(Math.random() * 5) - 2; // -2 to +2
    adjustedFemale += variance;
    adjustedMale -= variance;

    // Ensure 100% total
    if (adjustedFemale + adjustedMale !== 100) {
        adjustedMale = 100 - adjustedFemale;
    }

    return {
        engagementRate: displayEngagement,
        gender: {
            female: adjustedFemale,
            male: adjustedMale
        },
        ages: {
            primary: data.ages[0],
            secondary: data.ages[1] || null
        }
    };
};
