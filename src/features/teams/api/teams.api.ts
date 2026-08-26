// import { api } from '@/shared'
import type { ITeam } from '../types'
import { teams } from './mocks'

export const teamsApi = {
    getTeams: async (): Promise<ITeam[]> => {
        // const { data } = await api.get('/teams')

        // return data

        return Promise.resolve(teams)
    },

    //   getTeam: async (id: number): Promise<Team> => {
    //     const { data } = await axiosInstance.get(`/teams/${id}`);
    //     return data;
    //   },

    //   createTeam: async (dto: CreateTeamDto): Promise<Team> => {
    //     const formData = new FormData();
    //     formData.append('name', dto.name);
    //     formData.append('city', dto.city);
    //     if (dto.logo) formData.append('logo', dto.logo);

    //     const { data } = await axiosInstance.post('/teams', formData, {
    //       headers: { 'Content-Type': 'multipart/form-data' },
    //     });
    //     return data;
    //   },

    //   updateTeam: async (id: number, dto: UpdateTeamDto): Promise<Team> => {
    //     const formData = new FormData();
    //     if (dto.name) formData.append('name', dto.name);
    //     if (dto.city) formData.append('city', dto.city);
    //     if (dto.logo) formData.append('logo', dto.logo);

    //     const { data } = await axiosInstance.patch(`/teams/${id}`, formData, {
    //       headers: { 'Content-Type': 'multipart/form-data' },
    //     });
    //     return data;
    //   },

    //   deleteTeam: async (id: number): Promise<void> => {
    //     await axiosInstance.delete(`/teams/${id}`);
    //   },

    //   toggleFavorite: async (id: number): Promise<Team> => {
    //     const { data } = await axiosInstance.post(`/teams/${id}/favorite`);
    //     return data;
    //   },
}
