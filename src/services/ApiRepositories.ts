import Repository from "../types/Repository";

export class ApiRepositories {

    async getRepositories(
        username: string = "pedroaugustofb"
    ): Promise<Repository[]> {
        // fetch repositories from github api from pedroaugustofb profile
        const repostories = await fetch(
        `https://api.github.com/users/${username}/repos`
        )
        .then((response) => response.json())
        .then((repostories: Repository[]) =>
            repostories.filter(
            (repository: Repository) => repository.homepage !== null && repository.homepage !== ""
            )
        );

        return await Promise.all(
        repostories.map(async (repository: Repository) => {
            const languagesValues = await fetch(
            `https://api.github.com/repos/${username}/${repository.name}/languages`
            ).then((response) => response.json());

            return {
            name: repository.name,
            id: repository.id,
            topics: repository.topics,
            url: repository.url,
            languagesValues: languagesValues,
            languages: Object.keys(languagesValues),
            homepage: repository.homepage,
            };
        })
        );
    }
}
