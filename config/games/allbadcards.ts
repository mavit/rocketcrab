import { ServerGame } from "../../types/types";
import { postJson } from "../../utils/utils";

const fetchWithCookies = require("fetch-cookie")(fetch);

const game: ServerGame = {
    id: "allbadcards",
    name: "All Bad Cards",
    author: "Jake Lauer",
    basedOn: {
        game: "Cards Against Humanity",
        link: "https://cardsagainsthumanity.com/",
    },
    description:
        "Be rude. Be irreverent. Be hilarious! Select the card from your hand that you think is best described by a card played by the judge!",
    displayUrlText: "allbad.cards",
    displayUrlHref: "https://allbad.cards/",
    donationUrlText: "Support Jake on Patreon!",
    donationUrlHref: "https://www.patreon.com/Allbadcards",
    category: ["easy"],
    players: "4-20+",
    familyFriendly: false,
    getJoinGameUrl: async () => {
        const { guid } = await fetchWithCookies(
            "https://allbad.cards/api/user/register"
        ).then((res) => res.json());

        const { id } = await postJson(
            "https://allbad.cards/api/game/create",
            {
                guid,
                nickname: "rocketcrab, leaving in 20 seconds!",
                isFamily: false,
                isPublic: false,
            },
            fetchWithCookies
        );

        setTimeout(() => {
            postJson(
                "https://allbad.cards/api/game/kick",
                {
                    gameId: id,
                    targetGuid: guid,
                    guid: guid,
                },
                fetchWithCookies
            )
                .then((a) => console.log(a))
                .catch((e) => console.error(e));
        }, 20 * 1000);

        return { playerURL: "https://allbad.cards/game/" + id };
    },
};

export default game;
