import ApiClient from "./ApiClient";

const TeamService = {
    async getAllTeams() {
        const response = await ApiClient.get("/teams");
        return response.data;
    },
    async getTeamById(id) {
        const response = await ApiClient.get(`/teams/${id}`);
        return response.data;
    }
};

export default TeamService;
