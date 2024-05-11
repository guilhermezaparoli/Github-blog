import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

interface fetchDataUserProps {
  userName: string ;
}

export async function fetchDataUser({userName}: fetchDataUserProps) {
  const response = await api.get(`/users/${userName}`);
  return response;
}


export async function fetchAndSearchIssues(text?: string) {
    const response = await api.get(`/search/issues?q=${text ? text : ''}%20repo:guilhermezaparoli/Github-blog`)
    return response
}

export async function fetchIssuePost (id: string | undefined) {
    const response = await api.get(`/repos/guilhermezaparoli/Github-blog/issues/${id}`)

    return response.data
}
