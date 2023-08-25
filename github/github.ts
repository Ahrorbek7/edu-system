export const useGithubCookie = () => useCookie('gh_token')

export const githubFetch = (url: string, fetchOptions: any = {}) => {
  return $fetch(url, {
    baseURL: 'https://api.github.com',
    ...fetchOptions,
    headers: {
      Authorization: `token ${useGithubCookie().value}`,
      ...fetchOptions.headers
    }
  })
}

export const fetchGithubUser = async () => {
  const cookie = useGithubCookie()
  let user = null; // Initialize user variable
  if (cookie.value) {
    user = await githubFetch('/user');
  }
  return user;
}

export const githubLogin = () => {
  if (process.client) {
    const { github } = useRuntimeConfig().public
    window.location.replace(
      `https://github.com/login/oauth/authorize?client_id=${github.clientId}&scope=public_repo`
    )
  }
}

export const githubLogout = async () => {
  useGithubCookie().value = null
  useState('gh_user').value = null
}
