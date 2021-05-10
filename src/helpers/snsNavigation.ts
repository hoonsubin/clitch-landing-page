import { reactive } from 'vue';

interface State {
    twitterName: string;
    discordName: string;
}

export default function snsNavigation() {
    const state = reactive<State>({
        twitterName: '@Clitch10',
        discordName: 'CLITCH Community',
    });

    const goToTwitter = () => window.open('https://twitter.com/Clitch10', '_blank');
    const goToDiscord = () => window.open('https://discord.gg/pEaBPyydE4', '_blank');

    return {
        state,
        goToTwitter,
        goToDiscord,
    };
}
