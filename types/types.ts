import { LobbyStatus, GameStatus } from "./enums";

export type RocketCrab = {
    lobbyList: Array<Lobby>;
};

export type Lobby = {
    status: LobbyStatus;
    playerList: Array<Player>;
    code: string;
    selectedGame: string;
    gameState: GameState;
};

export type Player = {
    name: string;
    socket: SocketIO.Socket;
};

export type ClientGame = {
    name: string;
    author?: string;
    description?: string;
    category?: Array<string>;
    players?: string;
    familyFriendly: boolean;
    minPlayers: number;
    maxPlayers: number;
};

export type ServerGame = ClientGame & {
    getJoinGameUrl: () => Promise<string>;
};

export type GameCategory = {
    id: string;
    name: string;
    color: string;
    backgroundColor: string;
};

export type ClientGameLibrary = {
    categories: Array<GameCategory>;
    gameList: Array<ClientGame>;
};

export type ServerGameLibrary = {
    categories: Array<GameCategory>;
    gameList: Array<ServerGame>;
};

export type GameState = {
    status: GameStatus;
    url?: string;
};

export type JoinLobbyResponse = {
    code: string;
    name?: string;
};

export type PageLayoutParams = {
    children: JSX.Element[] | JSX.Element;
    path?: string;
    loading?: boolean;
};

export type CodeProps = {
    gameLibrary: ClientGameLibrary;
};
